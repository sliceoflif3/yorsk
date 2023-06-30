import { Component, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  picUrl: string;
  @Input() album: any;
  constructor(private storage: AngularFireStorage) { }
  
  getImageUrl() {
    const ref = this.storage.refFromURL(this.album.coverPic); // Provide the path to your image
    ref.getDownloadURL().subscribe((url) => {
      // Use the HTTPS URL to display or work with the image
      // console.log(url);
      this.picUrl = url;});
  }

  ngOnInit() { 
    this.getImageUrl();
  }
}
