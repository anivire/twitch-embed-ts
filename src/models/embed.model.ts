/**
 * Twitch embed options
 */
export interface TwitchEmbedOptions {
    /**
     * Height of the embedded window, in pixels. Can be expressed as a percentage, by passing a string like `100%`. Recommended minimum: `300`
     */
    height: number | string

    /**
     * Width of the embedded window, in pixels. Can be expressed as a percentage, by passing a string like `50%`. Recommended minimum: `400`
     */
    width: number | string

    /**
     * Only required if your site is embedded on any domain(s) other than the one that instantiates the Twitch embed. 
     * 
     * Example parent parameter: `["streamernews.example.com", "embed.example.com"]`
     */
    parent?: string[]

    /**
     * Channel name (for a live stream). 
     * 
     * If channel is specified along with video and/or collection, only channel is used.
     * 
     * To change the channel or video later, use `setChannel`, `setVideo`, or `setCollection`
     */
    channel?: string

    /**
     * Video ID.
     * 
     * If both video and collection are specified, the specified collection starts playing from the specified video. 
     * If the video is not in the collection, collection is ignored and the specified video is played.
     * 
     * To change the channel or video later, use `setChannel`, `setVideo`, or `setCollection`
     */
    video?: string

    /**
     * Collection ID.
     * 
     * If both video and collection are specified, the specified collection starts playing from the specified video. 
     * If the video is not in the collection, collection is ignored and the specified video is played.
     * 
     * To change the channel or video later, use `setChannel`, `setVideo`, or `setCollection`
     */
    collection?: string

    /**
     * A boolean attribute set by inclusion. In other words, including the attribute enables fullscreen 
     * viewing while excluding the attribute ensures fullscreen viewing is not allowed
     */
    allowfullscreen?: boolean

    /**
     * If `true`, the video starts playing automatically, without the user clicking play. 
     * The exception is mobile devices, on which video cannot be played without user interaction. Default: `true`
     */
    autoplay?: boolean

    /**
     * Specifies whether the initial state of the video is muted. Default: `false`
     */
    muted?: boolean

    /**
     * Determines the screen layout. Valid values: 
     * 
     * `video-with-chat`: default if channel is provided, and only supported for live content. 
     * Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.
     * 
     * `video`: default if channel is not provided. Shows only the video player (omits chat)
     */
    layout?: TwitchEmbedLayout

    /**
     * The Twitch embed color theme to use. Valid values: `light` or `dark`. Default: `dark`
     */
    theme?: TwitchEmbedTheme

    /**
     * Only valid for Video on Demand content. Time in the video where playback starts. 
     * Specifies hours, minutes, and seconds. Default: 0h0m0s (the start of the video)
     */
    time?: string
}

/**
 * Embed layout type
 */
export enum TwitchEmbedLayout {
    /**
     * Default if channel is provided, and only supported for live content. 
     * Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player
     */
    VIDEO_WITH_CHAT = 'video-with-chat',

    /**
     * Default if channel is not provided. Shows only the video player (omits chat)
     */
    VIDEO = 'video'
}

/**
 * Embed color theme
 */
export enum TwitchEmbedTheme {
    /**
     * Light Twitch embed color theme
     */
    LIGHT = 'light',

    /**
     * Dark Twitch embed color theme
     */
    DARK = 'dark'
}

/**
 * Provides a list of subscribable Twitch player embed events
 */
export enum TwitchEmbedEvents {
    /**
     * Player just unpaused, will either start video playback or start buffering
     */
    PLAY = 'play',
    /**
     * Player is ready to accept function calls
     */
    READY = 'ready',
}