import { TwitchPlaybackStats } from "./types/playback.types";
import { TwitchPlayerEvents, TwitchPlayerOptions } from "./types/player.types";
import { Quality } from "./types/quality.types";

declare global {
    interface Window {
        Twitch: any;
    }
  }
  
  export class TwitchPlayer {
    private player!: TwitchPlayer;

    /**
     * Creates a new Twitch player from player instance
     * @param player player instance
     * @constructor creates a new Twitch player instance
     */
    public static InitPlayer(player: TwitchPlayer): TwitchPlayer {
      const twitchPlayer = new this();
      twitchPlayer.player = player;

      return twitchPlayer;
    }
    
    /**
     * Creates a new Twitch player given a <div> element and some options for the player
     * @param divId the div HTML element where the player will appear
     * @param options the player initialization options
     * @constructor creates a new Twitch player instance
     */
    public static CreatePlayer(divId: string, options: TwitchPlayerOptions): TwitchPlayer {
      const twitchPlayer = new this();

      try {
        if (window.Twitch && window.Twitch.Player) {
          twitchPlayer.player = new window.Twitch.Player(
            divId, 
            options
          );
        }
      } catch (e: unknown) {
        console.error('Twitch embed library is not provided or loaded, please provide library to page.')
        console.error(e instanceof Error && e.message);
      }

      return twitchPlayer;
    }

    /**
   * Add event listener to twitch player
   * @param event player event
   * @param callback function
   */
  public addEventListener(
    event: TwitchPlayerEvents, 
    callback: Function
  ): void {
    this.player.addEventListener(event, callback);
  }

  /**
   * Remove event listener from twitch player
   * @param event player event
   * @param callback function
   */
  public removeEventListener(
    event: TwitchPlayerEvents, 
    callback: Function
  ): void {
    this.player.removeEventListener(event, callback);
  }

  /**
   * Disables display of Closed Captions
   */
  public disableCaptions(): void {
    this.player.disableCaptions();
  }

  /**
   * Enables display of Closed Captions
   */
  public enableCaptions(): void {
    this.player.enableCaptions();
  }

  /**
   * Pauses the player
   */
  public pause(): void {
    this.player.pause();
  }

  /**
   * Begins playing the specified video
   */
  public play(): void {
    this.player.play();
  }

  /**
   * Seeks to the specified `timestamp` (in seconds) in the video
   * @param timestamp time
   */
  public seek(timestamp: number): void {
    this.player.seek(timestamp);
  }

  /**
   * Sets the channel to be played
   * @param channel channel name
   */
  public setChannel(channel: string): void {
    this.player.setChannel(channel);
  }

  /**
   * Sets the collection to be played.

    Optionally also specifies the video within the collection, from which to start playback. 
    If a `videoId` is not provided here or the specified video is not part of the collection, 
    playback starts with the first video in the collection
   * @param collectionId collection id
   * @param videoId video id
   */
  public setCollection(collectionId: string, videoId?: string): void {
    this.player.setCollection(collectionId, videoId)
  }

  /**
   * Sets the quality of the video. 

    `quality` should be a string value returned by `getQualities()`
   * @param quality 
   */
  public setQuality(quality: string): void {
    this.player.setQuality(quality);
  }

  /**
   * Sets the video to be played to be played and starts playback at `timestamp` (in seconds)
   * @param videoId 
   * @param timestamp 
   */
  public setVideo(videoId: string, timestamp: number): void {
    this.player.setVideo(videoId, timestamp);
  }

  /**
   * Returns true if the player is muted; otherwise, false
   * @returns mute state
   */
  public getMuted(): boolean {
    return this.player.getMuted();
  }

  /**
   * If true, mutes the player; otherwise, unmutes it. This is independent of the volume setting
   * @param muted mute state
   */
  public setMuted(muted: boolean): void {
    this.player.setMuted(muted);
  }
 
  /**
   * Returns the volume level
   * @returns value between 0.0 and 1.0
   */
  public getVolume(): number {
    return this.player.getVolume();
  }

  /**
   * Sets the volume to the specified volume level
   * @param volumeLevel value between 0.0 and 1.0
   */
  public setVolume(volumeLevel: number): void {
    this.player.setVolume(volumeLevel);
  }

  /**
   * Returns an object with statistics on the playerded video player and the current live stream or VOD
   * @returns object with statistics
   */
  public getPlaybackStats(): TwitchPlaybackStats {
    return this.player.getPlaybackStats();
  }

  /**
   * Returns the channel’s name. Works only for live streams, not VODs
   * @returns channel name
   */
  public getChannel(): string {
    return this.player.getChannel();
  }

  /**
   * Returns the current video’s timestamp, in seconds. Works only for VODs, not live streams
   * @returns video timestamp
   */
  public getCurrentTime(): number {
    return this.player.getCurrentTime();
  }

  /**
   * Returns the duration of the video, in seconds. Works only for VODs,not live streams
   * @returns duration of the video
   */
  public getDuration(): number {
    return this.player.getDuration();
  }

  /**
   * Returns true if the live stream or VOD has ended; otherwise, false
   * @returns stream status
   */
  public getEnded(): boolean {
    return this.player.getEnded();
  }

  /**
   * Returns the available video qualities
   * @returns video qualities
   */
  public getQualities(): Quality[] {
    return this.player.getQualities();
  }

  /**
   * Returns the current quality of video playback
   * @returns state of playback
   */
  public getQuality(): string {
    return this.player.getQuality();
  }

  /**
   * Returns the video ID. Works only for VODs, not live streams
   * @returns video id
   */
  public getVideo(): string {
    return this.player.getVideo();
  }

  /**
   * Returns true if the video is paused; otherwise, false. Buffering or seeking is considered playing.
   * @returns pause state
   */
  public isPaused(): boolean {
    return this.player.isPaused();
  }
}