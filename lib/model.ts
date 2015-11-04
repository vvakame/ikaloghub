"use strict";

export const lobbyType = [
    "public"
];
export const lobbyState = [
    "matched"
];
export const rule = [
    "ガチホコバトル"
];
export const reason = [
    "hoko_inksplode", "bold", "quickbomb", "splatcharger", "splatscope_wakame", "hoko_shot", "dualsweeper", "splashbomb", "liter3k_scope", "daioika", "bucketslosher", "wakaba", "kyubanbomb", "octoshooter_replica", "splatscope", "splatroller_collabo", "hissen", "52gal", "dynamo", "nova", "sharp_neo", "megaphone", "supershot", "prime", "carbon", "carbon_deco", "chasebomb"
];
export const judge = [
    "lose", "win"
];
export const weapon = [
    "ノヴァブラスター"
];

export const reasonToWeaponMap: { [weaponId: string]: string; } = {
    "liter3k_scope_custom": "リッター3Kカスタム",
    "hotblaster_custom": "ホットブラスターカスタム"
};
