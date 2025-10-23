import { Component } from '@angular/core';
import { Song } from '../models/song.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SongListComponent } from '../components/song-list/song-list.component';
import { Share } from '@capacitor/share';

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
  calculateTotalDuration(): string {
    let totalSeconds = 0;
    for (const song of this.selectedSongs) {
      const [minutes, seconds] = song.duration.split(':').map(Number);
      totalSeconds += (minutes * 60) + seconds;
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  async sharePlaylist() {
  if (this.selectedSongs.length === 0) {
    alert('Please select at least one song to share your playlist.');
    return;
  }

  const playlistText = this.selectedSongs
    .map(song => `${song.title} - ${song.artist}`)
    .join('\n');

  await Share.share({
    title: 'My Playlist',
    text: `Check out my playlist:\n\n${playlistText}`,
    dialogTitle: 'Share your playlist with friends',
  });
}

}
