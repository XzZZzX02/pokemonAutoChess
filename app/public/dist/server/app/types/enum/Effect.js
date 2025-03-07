"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
var Effect;
(function (Effect) {
    Effect["INGRAIN"] = "INGRAIN";
    Effect["GROWTH"] = "GROWTH";
    Effect["SPORE"] = "SPORE";
    Effect["BLAZE"] = "BLAZE";
    Effect["VICTORY_STAR"] = "VICTORY_STAR";
    Effect["DROUGHT"] = "DROUGHT";
    Effect["DESOLATE_LAND"] = "DESOLATE_LAND";
    Effect["DRIZZLE"] = "DRIZZLE";
    Effect["RAIN_DANCE"] = "RAIN_DANCE";
    Effect["PRIMORDIAL_SEA"] = "PRIMORDIAL_SEA";
    Effect["STAMINA"] = "STAMINA";
    Effect["STRENGTH"] = "STRENGTH";
    Effect["ENDURE"] = "ENDURE";
    Effect["PURE_POWER"] = "PURE_POWER";
    Effect["RISING_VOLTAGE"] = "RISING_VOLTAGE";
    Effect["OVERDRIVE"] = "OVERDRIVE";
    Effect["POWER_SURGE"] = "POWER_SURGE";
    Effect["GUTS"] = "GUTS";
    Effect["STURDY"] = "STURDY";
    Effect["DEFIANT"] = "DEFIANT";
    Effect["JUSTIFIED"] = "JUSTIFIED";
    Effect["AMNESIA"] = "AMNESIA";
    Effect["LIGHT_SCREEN"] = "LIGHT_SCREEN";
    Effect["EERIE_SPELL"] = "EERIE_SPELL";
    Effect["HONE_CLAWS"] = "HONE_CLAWS";
    Effect["ASSURANCE"] = "ASSURANCE";
    Effect["BEAT_UP"] = "BEAT_UP";
    Effect["STEEL_SURGE"] = "STEEL_SURGE";
    Effect["STEEL_SPIKE"] = "STEEL_SPIKE";
    Effect["CORKSCREW_CRASH"] = "CORKSCREW_CRASH";
    Effect["MAX_MELTDOWN"] = "MAX_MELTDOWN";
    Effect["TILLER"] = "TILLER";
    Effect["DIGGER"] = "DIGGER";
    Effect["DRILLER"] = "DRILLER";
    Effect["DEEP_MINER"] = "DEEP_MINER";
    Effect["POISONOUS"] = "POISONOUS";
    Effect["VENOMOUS"] = "VENOMOUS";
    Effect["TOXIC"] = "TOXIC";
    Effect["DRAGON_ENERGY"] = "DRAGON_ENERGY";
    Effect["DRAGON_SCALES"] = "DRAGON_SCALES";
    Effect["DRAGON_DANCE"] = "DRAGON_DANCE";
    Effect["BULK_UP"] = "BULK_UP";
    Effect["RAGE"] = "RAGE";
    Effect["ANGER_POINT"] = "ANGER_POINT";
    Effect["PURSUIT"] = "PURSUIT";
    Effect["BRUTAL_SWING"] = "BRUTAL_SWING";
    Effect["POWER_TRIP"] = "POWER_TRIP";
    Effect["MEDITATE"] = "MEDITATE";
    Effect["FOCUS_ENERGY"] = "FOCUS_ENERGY";
    Effect["CALM_MIND"] = "CALM_MIND";
    Effect["COCOON"] = "COCOON";
    Effect["INFESTATION"] = "INFESTATION";
    Effect["HORDE"] = "HORDE";
    Effect["HEART_OF_THE_SWARM"] = "HEART_OF_THE_SWARM";
    Effect["SWIFT_SWIM"] = "SWIFT_SWIM";
    Effect["HYDRATION"] = "HYDRATION";
    Effect["WATER_VEIL"] = "WATER_VEIL";
    Effect["TAILWIND"] = "TAILWIND";
    Effect["FEATHER_DANCE"] = "FEATHER_DANCE";
    Effect["MAX_AIRSTREAM"] = "MAX_AIRSTREAM";
    Effect["SKYDIVE"] = "SKYDIVE";
    Effect["ODD_FLOWER"] = "ODD_FLOWER";
    Effect["GLOOM_FLOWER"] = "GLOOM_FLOWER";
    Effect["VILE_FLOWER"] = "VILE_FLOWER";
    Effect["SUN_FLOWER"] = "SUN_FLOWER";
    Effect["BATTLE_ARMOR"] = "BATTLE_ARMOR";
    Effect["MOUTAIN_RESISTANCE"] = "MOUTAIN_RESISTANCE";
    Effect["DIAMOND_STORM"] = "DIAMOND_STORM";
    Effect["CURSE_OF_VULNERABILITY"] = "CURSE_OF_VULNERABILITY";
    Effect["CURSE_OF_WEAKNESS"] = "CURSE_OF_WEAKNESS";
    Effect["CURSE_OF_TORMENT"] = "CURSE_OF_TORMENT";
    Effect["CURSE_OF_FATE"] = "CURSE_OF_FATE";
    Effect["AROMATIC_MIST"] = "AROMATIC_MIST";
    Effect["FAIRY_WIND"] = "FAIRY_WIND";
    Effect["STRANGE_STEAM"] = "STRANGE_STEAM";
    Effect["MOON_FORCE"] = "MOON_FORCE";
    Effect["CHILLY"] = "CHILLY";
    Effect["FROSTY"] = "FROSTY";
    Effect["FREEZING"] = "FREEZING";
    Effect["SHEER_COLD"] = "SHEER_COLD";
    Effect["ANCIENT_POWER"] = "ANCIENT_POWER";
    Effect["ELDER_POWER"] = "ELDER_POWER";
    Effect["FORGOTTEN_POWER"] = "FORGOTTEN_POWER";
    Effect["LARGO"] = "LARGO";
    Effect["ALLEGRO"] = "ALLEGRO";
    Effect["PRESTO"] = "PRESTO";
    Effect["DUBIOUS_DISC"] = "DUBIOUS_DISC";
    Effect["LINK_CABLE"] = "LINK_CABLE";
    Effect["GOOGLE_SPECS"] = "GOOGLE_SPECS";
    Effect["HATCHER"] = "HATCHER";
    Effect["BREEDER"] = "BREEDER";
    Effect["GOLDEN_EGGS"] = "GOLDEN_EGGS";
    Effect["TELEPORT_NEXT_ATTACK"] = "TELEPORT_NEXT_ATTACK";
    Effect["SHADOW_PUNCH_NEXT_ATTACK"] = "SHADOW_PUNCH_NEXT_ATTACK";
    Effect["GRASSY_TERRAIN"] = "GRASSY_TERRAIN";
    Effect["PSYCHIC_TERRAIN"] = "PSYCHIC_TERRAIN";
    Effect["ELECTRIC_TERRAIN"] = "ELECTRIC_TERRAIN";
    Effect["MISTY_TERRAIN"] = "MISTY_TERRAIN";
    Effect["SUN"] = "SUN";
    Effect["RAIN"] = "RAIN";
    Effect["SANDSTORM"] = "SANDSTORM";
    Effect["MISTY"] = "MISTY";
    Effect["SNOW"] = "SNOW";
    Effect["STORM"] = "STORM";
    Effect["NIGHT"] = "NIGHT";
    Effect["WINDY"] = "WINDY";
    Effect["BLOODMOON"] = "BLOODMOON";
    Effect["HYDRATATION"] = "HYDRATATION";
    Effect["COOL_BREEZE"] = "COOL_BREEZE";
    Effect["GAS"] = "GAS";
    Effect["POISON_GAS"] = "POISON_GAS";
    Effect["SHINING_RAY"] = "SHINING_RAY";
    Effect["LIGHT_PULSE"] = "LIGHT_PULSE";
    Effect["ETERNAL_LIGHT"] = "ETERNAL_LIGHT";
    Effect["MAX_ILLUMINATION"] = "MAX_ILLUMINATION";
    Effect["STEALTH_ROCKS"] = "STEALTH_ROCKS";
    Effect["SPIKES"] = "SPIKES";
    Effect["IMMUNITY_BURN"] = "IMMUNITY_BURN";
    Effect["IMMUNITY_CONFUSION"] = "IMMUNITY_CONFUSION";
    Effect["IMMUNITY_FREEZE"] = "IMMUNITY_FREEZE";
    Effect["IMMUNITY_PARALYSIS"] = "IMMUNITY_PARALYSIS";
    Effect["IMMUNITY_POISON"] = "IMMUNITY_POISON";
    Effect["IMMUNITY_SLEEP"] = "IMMUNITY_SLEEP";
    Effect["BUFF_HEAL_RECEIVED"] = "BUFF_HEAL_RECEIVED";
    Effect["LOCK_ON"] = "LOCK_ON";
    Effect["SHELL_TRAP"] = "SHELL_TRAP";
    Effect["QUICK_FEET"] = "QUICK_FEET";
    Effect["RUN_AWAY"] = "RUN_AWAY";
    Effect["HUSTLE"] = "HUSTLE";
    Effect["BERSERK"] = "BERSERK";
    Effect["STICKY_WEB"] = "STICKY_WEB";
    Effect["HAIL"] = "HAIL";
    Effect["FLUID"] = "FLUID";
    Effect["SHAPELESS"] = "SHAPELESS";
    Effect["ETHEREAL"] = "ETHEREAL";
})(Effect || (exports.Effect = Effect = {}));
//# sourceMappingURL=Effect.js.map