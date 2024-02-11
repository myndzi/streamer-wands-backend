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

local last_sent = ""
local function send_event()
    if not main_socket then return end
    if main_socket:status() ~= "open" then return end

    local json_string = serialize_data()
    if last_sent == json_string then return end

    main_socket:send(json_string)
    last_sent = json_string
end

local function send_ping()
    if not main_socket then return end
    if main_socket:status() ~= "open" then return end

    main_socket:send("im alive")
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
        send_ping()
    end

    increase_count()
end

async_loop(
    function()
        wait(180)
        send_event()
    end
)
