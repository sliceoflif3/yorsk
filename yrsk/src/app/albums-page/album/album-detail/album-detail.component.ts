import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../album.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  constructor(private route: ActivatedRoute, private service: AlbumService, private storage: AngularFireStorage) { }
  albumId: number;
  album: any;
  songs: any[];
  albumName: string;
  jpName: string;
  albums: any[];
  picUrl: string;
  realUrl: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      // Use the album ID to load the album details or perform any necessary actions
      this.service.getSongs(this.albumId).subscribe(album => {
        this.album = album;
        this.songs = this.album.songs;
        console.log(this.songs);
        console.log(this.album);
        this.albumName = this.album.name;
        this.jpName = this.album.jpname;
      });
    });

    this.service.getAlbums().subscribe(albums => { 
      this.albums = albums;
      this.picUrl = this.albums[this.albumId - 1].coverPic;
      console.log(this.picUrl);
      this.getImageUrl();
    });
  }

  getImageUrl() {
    console.log(this.picUrl);
    const ref = this.storage.refFromURL(this.picUrl); // Provide the path to your image
    ref.getDownloadURL().subscribe((url) => {
      // Use the HTTPS URL to display or work with the image
      this.realUrl = url;
      console.log(this.realUrl);
    });
  }
}
