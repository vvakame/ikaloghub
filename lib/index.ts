"use strict";

import {EventEmitter2} from "eventemitter2";

import * as event from "./event";
export * from "./event";

const ikaLogUri = "ws://localhost:9090/ws";

export default function open(webSocketUri: string = ikaLogUri) {
    "use strict";

    return new IkaEventEmitter(webSocketUri);
}

export class IkaEventEmitter extends EventEmitter2 {
    ws: WebSocket;

    constructor(public webSocketUri: string) {
        super();
        this.openWebSocket();
    }

    on(event: "on_lobby_matched", fn: (e: event.LobbyMatchedEvent) => any): IkaEventEmitter;
    on(event: "on_game_start", fn: (e: event.OnGameStartEvent) => any): IkaEventEmitter;
    on(event: "on_game_team_color", fn: (e: event.OnGameTeamColorEvent) => any): IkaEventEmitter;
    on(event: "on_game_go_sign", fn: (e: event.OnGameGoSignEvent) => any): IkaEventEmitter;
    on(event: "on_game_dead", fn: (e: event.OnGameDeadEvent) => any): IkaEventEmitter;
    on(event: "on_death_reason_identified", fn: (e: event.OnDeathReasonIdentifiedEvent) => any): IkaEventEmitter;
    on(event: "on_game_killed", fn: (e: event.OnGameKilledEvent) => any): IkaEventEmitter;
    on(event: "on_game_finish", fn: (e: event.OnGameFinishEvent) => any): IkaEventEmitter;
    on(event: "on_result_judge", fn: (e: event.OnResultJudgeEvent) => any): IkaEventEmitter;
    on(event: "on_result_detail", fn: (e: event.OnResultDetailEvent) => any): IkaEventEmitter;
    on(event: "on_result_udemae", fn: (e: event.OnResultUdemaeEvent) => any): IkaEventEmitter;
    on(event: "on_result_gears", fn: (e: event.OnResultGearsEvent) => any): IkaEventEmitter;
    on(event: "on_lobby_matching", fn: (e: event.OnLobbyMatchingEvent) => any): IkaEventEmitter;
    on(event: "on_game_session_end", fn: (e: event.OnGameSessionEndEvent) => any): IkaEventEmitter;
    on(event: "error", fn: (e: any) => any): IkaEventEmitter;
    on(event: string, fn: (e: event.InkEvent) => any): IkaEventEmitter;
    on(event: string, fn: Function): IkaEventEmitter {
        super.on(event, fn);
        return this;
    }

    private openWebSocket() {
        this.ws = new WebSocket(this.webSocketUri);
        this.ws.onopen = ev => {
        };
        this.ws.onmessage = ev => {
            if (ev && ev.data) {
                let data: event.InkEvent = this.snakeObjToCamelObj(JSON.parse(ev.data));
                this.emit(data.event, data);
            }
        };
        this.ws.onclose = ev => {
            this.ws = null;
            setTimeout(() => {
                this.openWebSocket();
            }, 3000);
        };
        this.ws.onerror = ev => {
            this.emit("error", ev);
        };
    }

    private snakeObjToCamelObj(snake: any): any {
        if (typeof snake !== "object" || snake == null) {
            return snake;
        }
        let obj: any = {};
        Object.keys(snake).forEach(key => {
            let v = snake[key];
            obj[snakeToCamel(key)] = this.snakeObjToCamelObj(v);
        });
        return obj;

        function snakeToCamel(key: string) {
            return key.replace(/_(.)/g, (_0, _1) => _1.toUpperCase());
        }
    }
}
