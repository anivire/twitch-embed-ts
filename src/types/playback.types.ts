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