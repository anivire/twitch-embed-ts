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