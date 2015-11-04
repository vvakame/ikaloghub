"use strict";

export interface InkEvent {
    event: string;
}

export interface LobbyMatchedEvent extends InkEvent {
    // event = "on_lobby_matched";
    lobbyType: string; // "public" | ...
    lobbyState: string; // "matched" | ...
}
export function isLobbyMatchedEvent(event: InkEvent): event is LobbyMatchedEvent {
    "use strict";

    return event.event === "on_lobby_matched";
}

export interface OnGameStartEvent extends InkEvent {
    // event = "on_game_start";
    rule: string; // "ガチヤグラ" | ...
    stage: string;
}
export function isOnGameStartEvent(event: InkEvent): event is OnGameStartEvent {
    "use strict";

    return event.event === "on_game_start";
}

export interface OnGameTeamColorEvent extends InkEvent {
    // event = "on_game_team_color";
    myTeamColorHsv: number;
    counterTeamColorHsv: number;
}
export function isOnGameTeamColorEvent(event: InkEvent): event is OnGameTeamColorEvent {
    "use strict";

    return event.event === "on_game_team_color";
}

export interface OnGameGoSignEvent extends InkEvent {
    // event = "on_game_go_sign";
}
export function isOnGameGoSignEvent(event: InkEvent): event is OnGameGoSignEvent {
    "use strict";

    return event.event === "on_game_go_sign";
}

export interface OnGameDeadEvent extends InkEvent {
    // event = "on_game_dead";
}
export function isOnGameDeadEvent(event: InkEvent): event is OnGameDeadEvent {
    "use strict";

    return event.event === "on_game_dead";
}

export interface OnDeathReasonIdentifiedEvent extends InkEvent {
    // event = "on_death_reason_identified";
    reason: string; // ブキID
}
export function isOnDeathReasonIdentifiedEvent(event: InkEvent): event is OnDeathReasonIdentifiedEvent {
    "use strict";

    return event.event === "on_death_reason_identified";
}

export interface OnGameKilledEvent extends InkEvent {
    // event = "on_game_killed";
}
export function isOnGameKilledEvent(event: InkEvent): event is OnGameKilledEvent {
    "use strict";

    return event.event === "on_game_killed";
}

export interface OnGameFinishEvent extends InkEvent {
    // event = "on_game_finish";
}
export function isOnGameFinishEvent(event: InkEvent): event is OnGameFinishEvent {
    "use strict";

    return event.event === "on_game_finish";
}

export interface OnResultJudgeEvent extends InkEvent {
    // event = "on_result_judge";
    judge: string; // "win" | ..
    knockout: boolean;
}
export function isOnResultJudgeEvent(event: InkEvent): event is OnResultJudgeEvent {
    "use strict";

    return event.event === "on_result_judge";
}

export interface OnResultDetailEvent extends InkEvent {
    // event = "on_result_detail";
    kills: number;
    deaths: number;
    rank: number;
    score: number; // ナワバリの時のみ
    udemae: string;
    weapon: string; // ブキ
    won: boolean;
}
export function isOnResultDetailEvent(event: InkEvent): event is OnResultDetailEvent {
    "use strict";

    return event.event === "on_result_detail";
}

export interface OnResultUdemaeEvent extends InkEvent {
    // event = "on_result_udemae";
    udemaeStr: string;
    udemaeExp: number;
}
export function isOnResultUdemaeEvent(event: InkEvent): event is OnResultUdemaeEvent {
    "use strict";

    return event.event === "on_result_udemae";
}

export interface OnResultGearsEvent extends InkEvent {
    // event = "on_result_gears";
}
export function isOnResultGearsEvent(event: InkEvent): event is OnResultGearsEvent {
    "use strict";

    return event.event === "on_result_gears";
}

export interface OnLobbyMatchingEvent extends InkEvent {
    // event = "on_lobby_matching";
    lobbyType: string;
    lobbyState: string;
}
export function isOnLobbyMatchingEvent(event: InkEvent): event is OnLobbyMatchingEvent {
    "use strict";

    return event.event === "on_lobby_matching";
}

export interface OnGameSessionEndEvent extends InkEvent {
    // event = "on_game_session_end";
}
export function isOnGameSessionEndEvent(event: InkEvent): event is OnGameSessionEndEvent {
    "use strict";

    return event.event === "on_game_session_end";
}
