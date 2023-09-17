dofile("mods/streamer_wands/files/scripts/utils.lua")
if not async then
    dofile("mods/streamer_wands/files/scripts/coroutines.lua")
end
dofile_once("mods/streamer_wands/files/lib/pollnet.lua")
dofile("mods/streamer_wands/files/ws/host.lua")

local main_socket = wslib.open_ws(HOST_URL)
local reconnect = false
local count = 0
local retries = 0
send_event = function(json_string)
    if main_socket then
        if main_socket:status() == "open" then
            main_socket:send(json_string)
        end
    end
end
local function increase_count()
    wake_up_waiting_threads(1) -- from coroutines.lua
    count = count + 1
end

_ws_main = function()
    if not main_socket then
        if reconnect and retries < 10 and count % 300 == 0 then
            main_socket = wslib.open_ws(HOST_URL)
            reconnect = false
            retries = retries + 1
        end
        increase_count()
        return
    end

    local happy, msg = main_socket:poll()

    if not happy and count % 1200 == 0 then
        main_socket = nil
        reconnect = true
        increase_count()
        return
    end

    if count % 300 == 0 then
        send_event("im alive")
    end

    increase_count()
end

last_sent = ""

async_loop(
    function()
        wait(180)

        local serialized = serialize_data()
        if (last_sent ~= serialized and serialized ~= "") then
            last_sent = serialized
            send_event(serialized)
        end
    end
)
