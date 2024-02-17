import { TwitchEmbed, TwitchPlayer } from "../embeds";
import { TwitchEmbedOptions } from "./embed.model";
import { TwitchPlayerOptions } from "./player.model";

declare global {
    export interface Window {
        Twitch: {
            Embed: new (divId: string, options: TwitchEmbedOptions) => TwitchEmbed;
            Player: new (divId: string, options: TwitchPlayerOptions) => TwitchPlayer;
        };
    }
}