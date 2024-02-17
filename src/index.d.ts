declare module "@anivire/embed-ts" {
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

    /**
     * Embed playback stats
     */
    export interface TwitchPlaybackStats {
        /**
         * The version of the Twitch video player backend
         */
        readonly backendVersion: string

        /**
         * The size of the video buffer in seconds
         */
        readonly bufferSize: number

        /**
         * Codecs currently in use, comma-separated (video,audio)
         */
        readonly codecs: string

        /**
         * The current size of the video player element (eg. 850x480)
         */
        readonly displayResolution: string

        /**
         * The video playback rate in frames per second. Not available on all browsers
         */
        readonly fps: number

        /**
         * Current latency to the broadcaster in seconds. Only available for live content
         */
        readonly hlsLatencyBroadcaster: number

        /**
         * The playback bitrate in Kbps
         */
        readonly playbackRate: number

        /**
         * The number of dropped frames
         */
        readonly skippedFrames: number

        /**
         * The native resolution of the current video (eg. 640x480)
         */
        readonly videoResolution: string
    }

    /**
     * Twitch player options
     */
    export interface TwitchPlayerOptions {
        /**
         * Height of the embedded window, in pixels. Can be expressed as a percentage, by passing a string like `100%`. Recommended minimum: `300`
         */
        readonly height: number | string

        /**
         * Width of the embedded window, in pixels. Can be expressed as a percentage, by passing a string like `50%`. Recommended minimum: `400`
         */
        readonly width: number | string

        /**
         * Only required if your site is embedded on any domain(s) other than the one that instantiates the Twitch embed. 
         * 
         * Example parent parameter: `["streamernews.example.com", "embed.example.com"]`
         */
        readonly parent?: string[]

        /**
         * Channel name (for a live stream). 
         * 
         * If channel is specified along with video and/or collection, only channel is used.
         * 
         * To change the channel or video later, use `setChannel`, `setVideo`, or `setCollection`
         */
        readonly channel?: string

        /**
         * Video ID.
         * 
         * If both video and collection are specified, the specified collection starts playing from the specified video. 
         * If the video is not in the collection, collection is ignored and the specified video is played.
         * 
         * To change the channel or video later, use `setChannel`, `setVideo`, or `setCollection`
         */
        readonly video?: string

        /**
         * Collection ID.
         * 
         * If both video and collection are specified, the specified collection starts playing from the specified video. 
         * If the video is not in the collection, collection is ignored and the specified video is played.
         * 
         * To change the channel or video later, use `setChannel`, `setVideo`, or `setCollection`
         */
        readonly collection?: string

        /**
         * If `true`, the video starts playing automatically, without the user clicking play. 
         * The exception is mobile devices, on which video cannot be played without user interaction. Default: `true`
         */
        readonly autoplay?: boolean

        /**
         * Specifies whether the initial state of the video is muted. Default: `false`
         */
        readonly muted?: boolean

        /**
         * Only valid for Video on Demand content. Time in the video where playback starts. 
         * Specifies hours, minutes, and seconds. Default: 0h0m0s (the start of the video)
         */
        readonly time?: string
    }

    /**
     * Twitch player events
     */
    export enum TwitchPlayerEvents {
        /**
         * Closed captions are found in the video content being played. This event will be emitted once for each new batch of captions, 
         * in sync with the corresponding video content. The event payload is a string containing the caption content
         */
        CAPTIONS = 'captions',

        /**
         * Video or stream ends
         */
        ENDED = 'ended',

        /**
         * Player is paused. Buffering and seeking is not considered paused
         */
        PAUSE = 'pause',

        /**
         * Player just unpaused, will either start video playback or start buffering
         */
        PLAY = 'play',

        /**
         * Player playback was blocked. Usually fired after an unmuted autoplay or unmuted programmatic call on `play()`
         */
        PLAYBACK_BLOCKED = 'playbackBlocked',

        /**
         * Player started video playback
         */
        PLAYING = 'playing',

        /**
         * Loaded channel goes offline
         */
        OFFLINE = 'offline',

        /**
         * Loaded channel goes online
         */
        ONLINE = 'online',

        /**
         * Player is ready to accept function calls
         */
        READY = 'ready',

        /**
         * User has used the player controls to seek a VOD, the `seek()` method has been called, or live playback has seeked to sync up after being paused
         */
        SEEK = 'seek'
    }

    /**
     * Embed player video quality
     */
    export interface Quality {
        bitrate: number
        codecs: string
        framerate: number
        group: string
        height: number
        isDefault: boolean
        name: string
        width: number
    }
}