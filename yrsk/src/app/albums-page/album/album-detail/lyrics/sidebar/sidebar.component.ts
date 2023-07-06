import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/albums-page/album.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: AlbumService, private storage: AngularFireStorage) { }
  albumId: number;
  album: any;
  songs: any[];
  extras: any[];
  songId: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.songId = +params['sid'];
      // Use the album ID to load the album details or perform any necessary actions
      this.service.getSongs(this.albumId).subscribe(album => {
        this.album = album;
        this.songs = this.album.albumSongs;
        if(this.hasExtra()) this.extras = this.album.albumExtra;
      });
    });
  }

  hasExtra(): boolean {
    return this.album.hasOwnProperty('albumExtra');
  }
}