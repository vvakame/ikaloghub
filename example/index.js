var ikaloghub = require("ikaloghub");
// var ikaloghub = require("../lib");

var emitter = ikaloghub.default();
emitter.on("on_lobby_matched", handler);
emitter.on("on_game_start", handler);
emitter.on("on_game_team_color", handler);
emitter.on("on_game_go_sign", handler);
emitter.on("on_game_dead", handler);
emitter.on("on_death_reason_identified", handler);
emitter.on("on_game_killed", handler);
emitter.on("on_game_finish", handler);
emitter.on("on_result_judge", handler);
emitter.on("on_result_detail", handler);
emitter.on("on_result_udemae", handler);
emitter.on("on_result_gears", handler);
emitter.on("on_lobby_matching", handler);
emitter.on("on_game_session_end", handler);
emitter.on("error", handler);

window.lobbyType = {};
window.lobbyState = {};
window.rule = {};
window.reason = {};
window.judge = {};
window.weapon = {};

function handler(e) {
	console.log(e);
	var el = document.querySelector("#result");
	el.innerText = JSON.stringify(e) + "\n" + el.innerText;

	if (e.event === "on_lobby_matched") {
		lobbyType[e.lobbyType] = true;
		lobbyState[e.lobbyState] = true;
	}
	if (e.event === "on_game_start") {
		rule[e.rule] = true;
	}
	if (e.event === "on_death_reason_identified") {
		reason[e.reason] = true;
	}
	if (e.event === "on_result_judge") {
		judge[e.judge] = true;
	}
	if (e.event === "on_result_detail") {
		weapon[e.weapon] = true;
	}
}
