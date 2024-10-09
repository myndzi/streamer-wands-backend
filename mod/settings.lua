dofile("data/scripts/lib/mod_settings.lua")

local mod_id = "streamer_wands"
mod_settings_version = 2
mod_settings = {
    {
        category_id = "group_of_settings1",
        ui_name = "General Settings",
        ui_description = "",
        foldable = true,
        _folded = false,
        settings = {
            {
                id = "MAP_OPENING_ENABLED",
                ui_name = "Open the map website when you press M on the keyboard",
                ui_description = "You can disable this and have only the voiceline playing",
                value_default = true,
                scope = MOD_SETTING_SCOPE_RUNTIME
            }, {
                id = "MAP_WEBSITE",
                ui_name = "Map website",
                ui_description = "Website to open, do not type https:// as part of the address",
                value_default = "noitamap.com",
                scope = MOD_SETTING_SCOPE_RUNTIME
            }
        }
    }, {
        category_id = "group_of_settings2",
        ui_name = "Sound Settings",
        ui_description = "",
        foldable = true,
        _folded = false,
        settings = {
            {
                id = "PLAY_MAP_OPENING_SOUND",
                ui_name = "Play a voiceline when you press M on the keyboard to open the map website",
                ui_description = "What is this place?",
                value_default = true,
                scope = MOD_SETTING_SCOPE_RUNTIME
            }, {
                id = "PLAY_SPICY_SOUND",
                ui_name = "Use a slighly spicier voiceline",
                ui_description = "Remember when Shroud was fighting a dragon in CSGO back in the day?",
                value_default = false,
                scope = MOD_SETTING_SCOPE_RUNTIME
            }
        }
    }
}
function ModSettingsUpdate(init_scope)
    local old_version = mod_settings_get_version(mod_id) -- This can be used to migrate some settings between mod versions.
    mod_settings_update(mod_id, mod_settings, init_scope)
end
function ModSettingsGuiCount()
    return mod_settings_gui_count(mod_id, mod_settings)
end

function ModSettingsGui(gui, in_main_menu)
    mod_settings_gui(mod_id, mod_settings, gui, in_main_menu)
end

