import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  constructor(private route: ActivatedRoute) { }
  albumId: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
      // Use the album ID to load the album details or perform any necessary actions
    });
  }
}
