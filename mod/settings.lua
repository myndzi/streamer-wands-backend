dofile("data/scripts/lib/mod_settings.lua")

local mod_id = "streamer_wands"

mod_settings_version = 2
mod_settings =
{
    {
        id = "seed",
        ui_name = "Show Seed",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "position",
        ui_name = "Show Position/Coordinates",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "ngp",
        ui_name = "Show New Game Plus",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "shifts",
        ui_name = "Show Shifts",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "shiftsTimer",
        ui_name = "Show Shift Timer",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
}

function ModSettingsUpdate(init_scope)
    local old_version = mod_settings_get_version(mod_id)
    mod_settings_update(mod_id, mod_settings, init_scope)
end

function ModSettingsGuiCount()
    return mod_settings_gui_count(mod_id, mod_settings)
end

function ModSettingsGui(gui, in_main_menu)
    mod_settings_gui(mod_id, mod_settings, gui, in_main_menu)
end
