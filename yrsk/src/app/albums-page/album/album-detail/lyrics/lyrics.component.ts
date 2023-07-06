import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/albums-page/album.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private service: AlbumService, private storage: AngularFireStorage) {}

  albumId: number;
  songId: number;
  lyrics: any[];
  song: any;
  showRomanji: boolean = true;
  showEnglish: boolean = true;
  picUrl: string;
  rawUrl: string;
  showInfo: boolean = true;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.songId = +params['sid'];
      // Use the album ID to load the album details or perform any necessary actions
      this.service.getLyrics(this.albumId, this.songId).subscribe(song => {
        this.song = song;
        this.lyrics = this.song.songLyrics;
        console.log(this.lyrics);
        // this.rawUrl = this.song.coverUrl;
        this.rawUrl = `gs://yrsk-d4b11.appspot.com/song cover/${this.songId}.png`;
        this.getImageUrl();
      });
    });
    
  }

  getImageUrl() {
    console.log(this.rawUrl);
    const ref = this.storage.refFromURL(this.rawUrl); // Provide the path to your image
    ref.getDownloadURL().subscribe((url) => {
      // Use the HTTPS URL to display or work with the image
      // console.log(url);
      this.picUrl = url;
      console.log(this.picUrl);
    });
  }

  toggleRomanji() {
    this.showRomanji = !this.showRomanji;
  }

  toggleEnglish() {
    this.showEnglish = !this.showEnglish; 
    console.log('toggleEnglish');
  }

  toggleInfo() {
    console.log('toggle');
    this.showInfo = !this.showInfo;
  }

}
