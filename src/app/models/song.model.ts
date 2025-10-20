// src/app/models/song.model.ts

export interface Song {
  title: string;
  artist: string;
  duration: string; // Consider using a number for seconds
  album: string;
  albumArt: string;
  selected: boolean; 
}