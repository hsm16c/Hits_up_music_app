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
    title: "There's a Light That Never Goes Out",
    artist: 'The Smiths',
    duration: '4:02',
    album: 'The Queen Is Dead',
    albumArt: 'assets/albums/queen_is_dead.png',
    selected: false,
  },
  {
    title: 'No Surprises',
    artist: 'Radiohead',
    duration: '3:49',
    album: 'OK Computer',
    albumArt: 'assets/albums/OK_computer.png',
    selected: false,
  },
  {
    title: 'Little Wing',
    artist: 'Jimi Hendrix',
    duration: '2:25',
    album: 'Axis: Bold as Love',
    albumArt: 'assets/albums/hendrix.png', // placeholder if missing
    selected: false,
  },
  {
    title: 'About a Girl',
    artist: 'Nirvana',
    duration: '2:48',
    album: 'Bleach',
    albumArt: 'assets/albums/bleach.png', // adjust if you download bleach later
    selected: false,
  },
  {
    title: 'Twist and Shout',
    artist: 'The Beatles',
    duration: '2:36',
    album: 'Please Please Me',
    albumArt: 'assets/albums/Please_please_me.png',
    selected: false,
  },
  {
    title: 'Should Have Known Better',
    artist: 'Sufjan Stevens',
    duration: '5:07',
    album: 'Carrie & Lowell',
    albumArt: 'assets/albums/Carryandlowel.png',
    selected: false,
  },
  {
    title: 'Stain',
    artist: 'Nirvana',
    duration: '2:38',
    album: 'Incesticide',
    albumArt: 'assets/albums/insesticide.png',
    selected: false,
  },
  {
    title: 'Orion',
    artist: 'Metallica',
    duration: '8:27',
    album: 'Master of Puppets',
    albumArt: 'assets/albums/master-of-puppets.jpg',
    selected: false,
  },
  {
    title: 'Wish You Were Here',
    artist: 'Pink Floyd',
    duration: '5:30',
    album: 'Wish You Were Here',
    albumArt: 'assets/albums/pinkfloyd.png',
    selected: false,
  },
  {
    title: 'Gimme Shelter',
    artist: 'The Rolling Stones',
    duration: '4:31',
    album: 'Let It Bleed',
    albumArt: 'assets/albums/letitbleed.png',
    selected: false,
  },
  {
    title: 'Come Together',
    artist: 'The Beatles',
    duration: '4:19',
    album: 'Abbey Road',
    albumArt: 'assets/albums/abbey-road.jpg',
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
