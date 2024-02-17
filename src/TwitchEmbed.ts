import { TwitchPlayer } from "./TwitchPlayer";
import { TwitchEmbedEvents, TwitchEmbedOptions } from "./types/embed.types";
import { TwitchPlaybackStats } from "./types/playback.types";
import { Quality } from "./types/quality.types";

declare global {
  interface Window {
    Twitch: any;
  }
}

/**
 * Twitch embed player with/out chat
 */
export class TwitchEmbed {
  private readonly embed!: TwitchEmbed;
  private readonly player!: TwitchPlayer;
  private readonly embedOptions: TwitchEmbedOptions;
  private readonly divId: string;

  /**
   * Creates a new Twitch embed instance
   * @param divId the div HTML element where the player will appear
   * @param options the player initialization options
   */
  constructor(divId: string, options: TwitchEmbedOptions) {
    this.embedOptions = options;
    this.divId = divId;

    try {
      if (window.Twitch && window.Twitch.Embed) {
        this.embed = new window.Twitch.Embed(
          this.divId, 
          this.embedOptions
        );

        this.player = TwitchPlayer.InitPlayer(this.embed.getPlayer());
      } 
    } catch (e: unknown) {
      console.error('Twitch embed library is not provided or loaded, please provide library to page.')
      console.error(e instanceof Error && e.message);
    }
  }
  
  /**
   * Add event listener to twitch embed
   * @param event embed event
   * @param callback function
   */
  public addEventListener(
    event: TwitchEmbedEvents, 
    callback: Function
  ): void {
    this.embed.addEventListener(event, callback);
  }

  /**
   * Remove event listener from twitch embed
   * @param event embed event
   * @param callback function
   */
  public removeEventListener(
    event: TwitchEmbedEvents, 
    callback: Function
  ): void {
    this.embed.removeEventListener(event, callback);
  }

  /**
   * Get div id for ijecting
   * @returns div id
   */
  public getDivId(): string {
    return this.divId;
  }
  
  /**
   * Get twitch embed player
   */
  public getPlayer(): TwitchPlayer {
    return this.player;
  }

  /**
   * Disables display of Closed Captions
   */
  public disableCaptions(): void {
    this.embed.disableCaptions();
  }

  /**
   * Enables display of Closed Captions
   */
  public enableCaptions(): void {
    this.embed.enableCaptions();
  }

  /**
   * Pauses the player
   */
  public pause(): void {
    this.embed.pause();
  }

  /**
   * Begins playing the specified video
   */
  public play(): void {
    this.embed.play();
  }

  /**
   * Seeks to the specified `timestamp` (in seconds) in the video
   * @param timestamp time
   */
  public seek(timestamp: number): void {
    this.embed.seek(timestamp);
  }

  /**
   * Sets the channel to be played
   * @param channel channel name
   */
  public setChannel(channel: string): void {
    this.embed.setChannel(channel);
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
    this.embed.setCollection(collectionId, videoId)
  }

  /**
   * Sets the quality of the video. 

    `quality` should be a string value returned by `getQualities()`
   * @param quality 
   */
  public setQuality(quality: string): void {
    this.embed.setQuality(quality);
  }

  /**
   * Sets the video to be played to be played and starts playback at `timestamp` (in seconds)
   * @param videoId 
   * @param timestamp 
   */
  public setVideo(videoId: string, timestamp: number): void {
    this.embed.setVideo(videoId, timestamp);
  }

  /**
   * Returns true if the player is muted; otherwise, false
   * @returns mute state
   */
  public getMuted(): boolean {
    return this.embed.getMuted();
  }

  /**
   * If true, mutes the player; otherwise, unmutes it. This is independent of the volume setting
   * @param muted mute state
   */
  public setMuted(muted: boolean): void {
    this.embed.setMuted(muted);
  }
 
  /**
   * Returns the volume level
   * @returns value between 0.0 and 1.0
   */
  public getVolume(): number {
    return this.embed.getVolume();
  }

  /**
   * Sets the volume to the specified volume level
   * @param volumeLevel value between 0.0 and 1.0
   */
  public setVolume(volumeLevel: number): void {
    this.embed.setVolume(volumeLevel);
  }

  /**
   * Returns an object with statistics on the embedded video player and the current live stream or VOD
   * @returns object with statistics
   */
  public getPlaybackStats(): TwitchPlaybackStats {
    return this.embed.getPlaybackStats();
  }

  /**
   * Returns the channel’s name. Works only for live streams, not VODs
   * @returns channel name
   */
  public getChannel(): string {
    return this.embed.getChannel();
  }

  /**
   * Returns the current video’s timestamp, in seconds. Works only for VODs, not live streams
   * @returns video timestamp
   */
  public getCurrentTime(): number {
    return this.embed.getCurrentTime();
  }

  /**
   * Returns the duration of the video, in seconds. Works only for VODs,not live streams
   * @returns duration of the video
   */
  public getDuration(): number {
    return this.embed.getDuration();
  }

  /**
   * Returns true if the live stream or VOD has ended; otherwise, false
   * @returns stream status
   */
  public getEnded(): boolean {
    return this.embed.getEnded();
  }

  /**
   * Returns the available video qualities
   * @returns video qualities
   */
  public getQualities(): Quality[] {
    return this.embed.getQualities();
  }

  /**
   * Returns the current quality of video playback
   * @returns state of playback
   */
  public getQuality(): string {
    return this.embed.getQuality();
  }

  /**
   * Returns the video ID. Works only for VODs, not live streams
   * @returns video id
   */
  public getVideo(): string {
    return this.embed.getVideo();
  }

  /**
   * Returns true if the video is paused; otherwise, false. Buffering or seeking is considered playing.
   * @returns pause state
   */
  public isPaused(): boolean {
    return this.embed.isPaused();
  }
}
