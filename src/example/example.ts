import { TwitchEmbed } from "../TwitchEmbed";
import { TwitchPlayer } from "../TwitchPlayer";
import { TwitchEmbedEvents } from "../types/embed.types";

const embed = new TwitchEmbed(
    'twitch-embed', 
    {
        height: '100%',
        width: '100%',
        channel: 'anivire_',
        parent: ['anivire.xyz']
    }
);

embed.addEventListener(TwitchEmbedEvents.PLAY, () => {
    console.info('Twitch embed is ready to work.')
});

const player = embed.getPlayer();
console.info(player.getPlaybackStats());

const testPlayer = TwitchPlayer.CreatePlayer(
    'twitch-player', 
    {
        height: '100%',
        width: '100%',
        channel: 'anivire_',
        parent: ['anivire.xyz']
    }
);

testPlayer.setChannel('tijoe');