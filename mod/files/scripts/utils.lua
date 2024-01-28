dofile("mods/streamer_wands/files/scripts/json.lua")
dofile_once("data/scripts/perks/perk.lua")
dofile_once("data/scripts/gun/gun_actions.lua")
dofile_once("mods/streamer_wands/files/scripts/enemyNames.lua")
dofile_once("mods/streamer_wands/files/scripts/enemyNamesApoth.lua")
dofile_once("mods/streamer_wands/stats.lua")

function get_player()
    local player = EntityGetWithTag("player_unit") or nil
    if player ~= nil then
        return player[1]
    end
end

function get_player_pos()
    local x, y = EntityGetTransform(get_player())
    if (x ~= nil) then
        return x, y
    end
end

function str_to_table(data)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, value)
    end
    return ret
end

function get_wands()
    local childs = EntityGetAllChildren(get_player())
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_quick" then
                inven = child
            end
        end
    end
    local wands = {}
    if inven ~= nil then
        local items = EntityGetAllChildren(inven)
        for _, child_item in ipairs(items) do
            if EntityHasTag(child_item, "wand") then
                wands[_] = child_item
            end
        end
    end

    return wands or nil
end

function get_inventory()
    local childs = EntityGetAllChildren(get_player())
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_full" then
                inven = child
            end
        end
    end
    return inven or nil
end

function get_items()
    local childs = EntityGetAllChildren(get_player())
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_quick" then
                inven = child
            end
        end
    end
    return inven or nil
end

function get_wand_stats(id)
    local serialized = {}

    local ability_comp = EntityGetFirstComponentIncludingDisabled(id, "AbilityComponent")
    local item_comp = EntityGetFirstComponentIncludingDisabled(id, "ItemComponent")
    serialized.sprite = ComponentGetValue2(ability_comp, "sprite_file")
    local use_name = ComponentGetValue2(item_comp, "always_use_item_name_in_ui")
    if use_name then
        serialized.ui_name = GameTextGetTranslatedOrNot(ComponentGetValue2(ability_comp, "ui_name"))
    else
        serialized.ui_name = "wand"
    end
    serialized.mana_max = ComponentGetValue2(ability_comp, "mana_max")
    serialized.mana_charge_speed = ComponentGetValue2(ability_comp, "mana_charge_speed")

    serialized.reload_time = ComponentObjectGetValue2(ability_comp, "gun_config", "reload_time")
    serialized.actions_per_round = ComponentObjectGetValue2(ability_comp, "gun_config", "actions_per_round")
    serialized.deck_capacity = ComponentObjectGetValue2(ability_comp, "gun_config", "deck_capacity")
    serialized.shuffle_deck_when_empty = ComponentObjectGetValue2(ability_comp, "gun_config", "shuffle_deck_when_empty")

    serialized.spread_degrees = ComponentObjectGetValue2(ability_comp, "gunaction_config", "spread_degrees")
    serialized.speed_multiplier = ComponentObjectGetValue2(ability_comp, "gunaction_config", "speed_multiplier")
    serialized.fire_rate_wait = ComponentObjectGetValue2(ability_comp, "gunaction_config", "fire_rate_wait")
    return serialized
end

function get_wand_spells(id)
    local childs = EntityGetAllChildren(id)
    local always_cast = {}
    local deck = {}
    if childs ~= nil then
        local last_slot = 0
        for _, child in ipairs(childs) do
            local item_comp = EntityGetFirstComponentIncludingDisabled(child, "ItemComponent")
            local item_action_component = EntityGetFirstComponentIncludingDisabled(child, "ItemActionComponent")
            local is_always_cast = ComponentGetValue2(item_comp, "permanently_attached")
            local action_id = ComponentGetValue2(item_action_component, "action_id")
            local slot = ComponentGetValue2(item_comp, "inventory_slot")
            local charges = ComponentGetValue2(item_comp, "uses_remaining")
            local empty_slots = slot - last_slot

            if empty_slots > 0 then
                for s = 1, empty_slots do
                    table.insert(deck, "0")
                    last_slot = last_slot + 1
                end
            end
            if (is_always_cast) then
                table.insert(always_cast, action_id .. "_#" .. charges)
            else
                table.insert(deck, action_id .. "_#" .. charges)
                last_slot = last_slot + 1
            end
        end
    end
    return always_cast, deck
end

function get_inventory_spells()
    local inven = get_inventory()
    if inven == nil then
        return
    end

    local inventory = {}
    local inven_slots = EntityGetAllChildren(inven)
    if inven_slots == nil then
        return
    end

    local last_slot = 0
    for _, child in ipairs(inven_slots) do
        local item_comp = EntityGetFirstComponentIncludingDisabled(child, "ItemComponent")
        local item_action_component = EntityGetFirstComponentIncludingDisabled(child, "ItemActionComponent")
        local action_id = ComponentGetValue2(item_action_component, "action_id")
        local charges = ComponentGetValue2(item_comp, "uses_remaining")
        local slot = ComponentGetValue2(item_comp, "inventory_slot")
        local empty_slots = slot - last_slot
        if empty_slots > 0 then
            for s = 1, empty_slots do
                table.insert(inventory, "0")
                last_slot = last_slot + 1
            end
        end

        table.insert(inventory, action_id .. "_#" .. charges)
        last_slot = last_slot + 1
    end

    return inventory
end

function get_inventory_items()
    local items_inven = get_items()
    if items_inven == nil then
        return
    end

    local inventory = {}
    local item_inven_slots = EntityGetAllChildren(items_inven)

    if item_inven_slots == nil then
        return
    end

    local nonwand = {}
    for i, child in ipairs(item_inven_slots) do
        if not EntityHasTag(child, "wand") then
            table.insert(nonwand, child)
        end
    end

    local last_slot = 0
    for _, child in ipairs(nonwand) do
        local item_comp = EntityGetFirstComponentIncludingDisabled(child, "ItemComponent")
        local name = ComponentGetValue2(item_comp, "item_name")
        local desc = ComponentGetValue2(item_comp, "ui_description")
        local amt = "$-1"
        local spr = ComponentGetValue2(item_comp, "ui_sprite")
        if EntityHasTag(child, "potion") or EntityHasTag(child, "powder_stash") then
            local material_inv_comp = EntityGetFirstComponentIncludingDisabled(child, "MaterialInventoryComponent")
            local mats = ComponentGetValue2(material_inv_comp, "count_per_material_type")
            local color = GameGetPotionColorUint(child)
            amt = "$" .. color
            for k, mat in ipairs(mats) do
                local i = k - 1
                if mat > 0 then
                    local mat_id = CellFactory_GetName(i)
                    local mat_key = CellFactory_GetUIName(i)
                    local mat_name = GameTextGetTranslatedOrNot(mat_key)
                    amt = amt .. string.format("@%s (%s)#%s", mat_name, mat_id, mat)
                end
            end
        end
        local slot = ComponentGetValue2(item_comp, "inventory_slot")
        local empty_slots = slot - last_slot
        if empty_slots > 0 then
            for s = 1, empty_slots do
                table.insert(inventory, "0")
                last_slot = last_slot + 1
            end
        end
        table.insert(inventory, spr .. name .. desc .. amt)
        last_slot = last_slot + 1
    end
    return inventory
end

function get_version()
    local versions = ModGetActiveModIDs()
    if GameIsBetaBuild() then
        table.insert(versions, "beta")
    end
    local seed = StatsGetValue("world_seed")
    table.insert(versions, "seed=" .. seed)
    return versions
end

function get_spells_progress()
    local spells = {}
    for _, spell in ipairs(actions) do
        if HasFlagPersistent("action_" .. string.lower(spell.id)) then
            table.insert(spells, spell.id)
        end
    end
    return spells
end

function get_perks_progress()
    local perks = {}
    for _, perk in ipairs(perk_list) do
        if HasFlagPersistent("perk_picked_" .. string.lower(perk.id)) then
            table.insert(perks, perk.id)
        end
    end
    return perks
end

function get_enemies_progress()
    local enemies = {}
    local currentEnemies = enemyNames
    for _, mod in ipairs(get_version()) do
        if mod == "apotheosis" or mod == "Apotheosis" then
            currentEnemies = enemyNamesApoth
        end
    end
    for _, enemy in ipairs(currentEnemies) do
        local flag = "kill_" .. string.lower(enemy)
        if GameHasFlagRun("new_" .. flag) or (stats[enemy]) then
            AddFlagPersistent(flag)
        elseif stats[enemy] ~= nil and stats[enemy] ~= 0 then
            AddFlagPersistent(flag)
        end
        if HasFlagPersistent(flag) then
            table.insert(enemies, enemy)
        end
    end
    return enemies
end

function serialize_data()
    local player = get_player()
    if (player == nil) then
        return ""
    end
    local serialized = {}
    local wands_ids = get_wands()
    local inventory = get_inventory_spells()
    local items = get_inventory_items()

    local progress = {}
    local perks = get_perks_progress()
    local spells = get_spells_progress()
    local enemies = get_enemies_progress()
    table.insert(progress, { perks, spells, enemies })

    local version = get_version()

    for _, wand in ipairs(wands_ids) do
        local stats = get_wand_stats(wand)
        local always_cast, deck = get_wand_spells(wand)
        table.insert(serialized, { stats, always_cast, deck })
    end
    return json.encode({ wands = serialized, inventory = inventory, items = items, progress = progress, version = version })
end
