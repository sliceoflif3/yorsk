import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent {
  constructor( private albumService: AlbumService ) {}
  albums: any[];

  ngOnInit() {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    })
  }
}
