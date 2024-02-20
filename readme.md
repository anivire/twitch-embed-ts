# twitch-embed-ts

![Logo](logo.png)

<center>Typescript Wrapper for Twitch Embed player / chat, based on twitch embed API</center><br/>

## Links

📚 View wrapper [docs](https://twitch-embed-ts-docs.vercel.app/getting-started),<br/>
📖 View official twitch [docs](https://dev.twitch.tv/docs/embed/)


## Intallation 
```bash
npm i @anivire/twitch-embed-ts
# or
yarn add @anivire/twitch-embed-ts
```

## Basic usage
Be sure to add the official Twitch Embed or Player script to your `index.html` first:
```html
<script src="https://embed.twitch.tv/embed/v1.js"></script>
<!-- OR / AND -->
<script src="https://player.twitch.tv/embed/v1.js"></script>
```

### Creating new TwitchEmbed instance
`TwitchEmbed` allows you to embed anything, including a player and/or chat. It also contains a `TwitchPlayer`, which can be interacted by calling `embed.getPlayer()`:
```ts
const embed = new TwitchEmbed(
    'twitch-embed', 
    options: {
        width: '1280',
        height: '720',
        channel: 'anivire_',
        parent: ['anivire.xyz']
    });
```

1. First argument `TwitchEmbed` is the identifier for the `<div>` in which the Twitch player will be embedded as a `<iframe>`.

2. Second argument is an object with player settings, which include parameters width, player height, and channel / video / collection, where channel has highest priority, meaning if both channel and video are specified, only channel (live) will be used.

### Creating new TwitchPlayer instance
`TwitchPlayer` allows you to embed only player, without chat:
```ts
const player = new TwitchPlayer(
    'twitch-player', 
    options: {
        width: '1280',
        height: '720',
        video: '2064229582',
        parent: ['anivire.xyz']
    });
```

All other info provided on wrapper [docs](https://twitch-embed-ts-docs.vercel.app/getting-started).