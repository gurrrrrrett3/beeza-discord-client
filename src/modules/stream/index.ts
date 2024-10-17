import { bot } from "../../core/index.js";
import Module from "../../core/base/module.js";
import { StreamerbotClient } from "@streamerbot/client";

export default class StreamModule extends Module<{
    host: string;
    port: number;
    commands: {
        [command: string]: {

        }
    }
}> {
    constructor() {
        super({
            name: "stream",
            description: "streamer.bot integration",
        });

        this.defaultConfig({
            host: "10.1.1.10",
            port: 8080,
            commands: {}
        })

    }

    async onLoad(): Promise<boolean> {

        const res = await fetch(`http://${this.config.get("host")}:${this.config.get("port")}/GetActions`)
        const data = await res.json();

        console.log(data);

        return true
    }

    getStreamModule(): StreamModule {
        return bot.moduleLoader.getModule("stream") as StreamModule;
    }

}
