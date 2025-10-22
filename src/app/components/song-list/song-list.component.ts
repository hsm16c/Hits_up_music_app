import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

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

  sortBy: 'title' | 'artist' | 'duration' = 'title'; 

  constructor(private router: Router) { }
  ngOnInit() {
    this.sortSongs();
  }

  updateSelectedSongs() {
    this.selectedSongs = this.songs.filter(song => song.selected);
    this.selectedSongsChanged.emit(this.selectedSongs);
  }
  setSortBy(event: any) {
    this.sortBy = event.detail.value;
    this.sortSongs(); 
  }
  sortSongs() {
    this.songs.sort((a, b) => {
      const aValue = a[this.sortBy].toString().toLowerCase();
      const bValue = b[this.sortBy].toString().toLowerCase();
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });
  }
  goToDetails(song: Song) { // Add goToDetails method
    this.router.navigate(['/song-details', { title: song.title }]); // Navigate to SongDetailsPage
  }
}
