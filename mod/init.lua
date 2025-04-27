dofile_once("mods/streamer_wands/files/scripts/materials.lua")
function is_valid_entity(entity_id)
    return entity_id ~= nil and entity_id ~= 0
end

function OnWorldPostUpdate()
    function get_world_state()
        local world = EntityGetWithTag("world_state") or nil
        if world ~= nil then
            return EntityGetFirstComponentIncludingDisabled(world[1], "WorldStateComponent")
        end
    end

    function get_shift_materials()
        local world_comp = get_world_state()
        local mats = ComponentGetValue2(world_comp, "changed_materials")
        local mats_table = {}
        for i, mat in ipairs(mats) do
            local mat_name = GameTextGetTranslatedOrNot("$mat_" .. mat)
            local mat_name_apoth = GameTextGetTranslatedOrNot("$material_" .. mat)
            if mat_name_apoth ~= "" then
                mat_name = mat_name_apoth
            end
            if mat_name == "" then
                if materials[mat] then
                    mat_name = GameTextGetTranslatedOrNot(materials[mat])
                else
                    mat_name = mat
                end
            end
            table.insert(mats_table, mat .. "%@%" .. mat_name)
        end
        return table.concat(mats_table, "<,>")
    end

    local world_state = GameGetWorldStateEntity()
    if (_ws_main and is_valid_entity(world_state)) then
        _ws_main()
    end
    local shiftMaterials = get_shift_materials()
    local shiftNumber = tonumber(GlobalsGetValue("fungal_shift_iteration", "0"))
    GlobalsSetValue("shift#" .. shiftNumber, shiftMaterials)
end

function OnPlayerSpawned(player_entity)
    dofile("mods/streamer_wands/files/ws/ws.lua")
end

function OnWorldInitialized()
    if GlobalsGetValue("start_time", "") ~= "" then
        local year, month, day, hour, minute, second = GameGetDateAndTimeUTC()
        GlobalsSetValue("start_time", table.concat({ year, month - 1, day, hour, minute, second }, ","))
    end
end

function OnWorldPreUpdate()
    if ModSettingGet("streamer_wands.seed") then return end
    if StatsGetValue("dead") ~= "1" then return end
    local gui = GuiCreate()
    GuiStartFrame(gui)
    width, height = GuiGetScreenDimensions(gui)
    GuiText(gui, 5, height - 15, "Seed: " .. StatsGetValue("world_seed"))
end

function OnPausePreUpdate()
    if (_ws_main) then
        _ws_main()
    end
end

function OnModInit()
    if not ModSettingGet("streamer_wands.seed") then
        local path = 'data/translations/common.csv'
        local text = _G['ModTextFileGetContent'](path)
        local item = text:match('menu_no,.-\n')
        print("hey idiot", item)
        local entries = {}
        item:gsub('([^,]*),', function(x)
            if x == '' then x = entries[2] end
            table.insert(entries, x)
        end)

        local function no_seed(x)
            local idx = 1
            return x:gsub('(, -[^:]-: )$0(,)', function(y, z)
                idx = idx + 1
                if (idx == 1) then
                    entries[idx] = ',' .. entries[idx]
                end
                return y .. entries[idx] .. z
            end)
        end
        local updated = text
            :gsub('menupause_worldseed,.-\n',
                no_seed)
            :gsub('log_worldseed,.-\n', no_seed)
        _G['ModTextFileSetContent'](path, updated)
    end
end
