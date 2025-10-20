import { Component } from '@angular/core';
import { Song } from '../models/song.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SongListComponent } from '../components/song-list/song-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, SongListComponent],
})
export class HomePage {
  selectedSongs: Song[] = [];

  onSelectedSongsChanged(songs: Song[]) {
    this.selectedSongs = songs;
    console.log('Selected songs:', this.selectedSongs);
  }
}
