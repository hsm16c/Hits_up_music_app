import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.page.html',
  styleUrls: ['./song-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  // ✅ This line fixes the NG2011 errors
  ]
})
export class SongDetailsPage implements OnInit {
  songTitle: string | null = null;
  song: Song | undefined;

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.songTitle = params.get('title');
    console.log('Song Title from Route:', this.songTitle);

    this.song = this.songs.find(song => song.title === this.songTitle);
    console.log('Song Details:', this.song);
  });
}

}
