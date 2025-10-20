import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SongListComponent implements OnInit {
  songs: Song[] = [
    {
      title: 'Wish You Were Here',
      artist: 'Pink Floyd',
      duration: '5:30',
      album: 'Wish You Were Here',
      albumArt: 'https://example.com/pink-floyd.jpg',
      selected: false,
    },
    {
      title: 'Gimme Shelter',
      artist: 'The Rolling Stones',
      duration: '4:31',
      album: 'Let It Bleed',
      albumArt: 'https://example.com/rolling-stones.jpg',
      selected: false,
    },
    {
      title: 'Come Together',
      artist: 'The Beatles',
      duration: '4:19',
      album: 'Abbey Road',
      albumArt: 'https://example.com/beatles.jpg',
      selected: false,
    },
  ];

  selectedSongs: Song[] = [];
  @Output() selectedSongsChanged = new EventEmitter<Song[]>();

  ngOnInit() {}

  updateSelectedSongs() {
    this.selectedSongs = this.songs.filter(song => song.selected);
    this.selectedSongsChanged.emit(this.selectedSongs);
  }
}
