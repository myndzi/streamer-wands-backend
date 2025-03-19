dofile("data/scripts/lib/mod_settings.lua")

local mod_id = "streamer_wands"

mod_settings_version = 2
mod_settings =
{
    {
        category_id = "notice",
        ui_name = [[
            Show Run Seed requires a mod restart/new game with mods enabled
            in order to hide or unhide the seed from pause menu and loading text

            All mod settings will hide/show on onlywands.com at the same frequency
            as any other onlywands data.
            ]],
        settings = {},
    },
    {
        id = "seed",
        ui_name = "Show Run Seed",
        ui_description =
        "Show Run Seed on onlywands.com, on pause menu, and on loading text",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "position",
        ui_name = "Show Current Position",
        ui_description = "All of these toggles will update like any other onlywands data",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "ngp",
        ui_name = "Show Current New Game Plus Number",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "shifts",
        ui_name = "Show Shifts",
        ui_description =
        "List current run's fungal shifts, cheatgui/other modded fungal shifts don't play nice with grouping shifts",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        id = "shiftsTimer",
        ui_name = "Show Shift Timer",
        ui_description = "Show how long until next fungal shift",
        value_default = true,
        scope = MOD_SETTING_SCOPE_RUNTIME
    },
    {
        category_id = "disclaimer"

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
