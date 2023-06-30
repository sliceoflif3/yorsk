import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>('https://yrsk-d4b11-default-rtdb.asia-southeast1.firebasedatabase.app/albums.json'); //replace this with actual API endpoint later
  }

  // fetchAlbums() {
  //   this.http.get<any[]>('https://yrsk-d4b11-default-rtdb.asia-southeast1.firebasedatabase.app/albums.json').subscribe(
  //     albums => {
  //       console.log(albums);
  //       return albums;
  //     }
  //   )
  // }

  //   albums = [
  //     {
  //       id: 1,
  //       name: "NATSUKUSA GA JAMA WO SURU",
  //       year: 2017,
  //       jpname: "夏草が邪魔をする",
  //       translation: "The Summer Grass Is Getting In My Way | The Summer Grass Gets In The Way",
  //       class: "EP / Mini-Album",
  //       trailerUrl: "https://youtu.be/6EgbGnSJnS4",
  //       youtubeName: "ヨルシカ - 夏草が邪魔をする (Album Trailer)",
  //       spotifyUrl: "https://open.spotify.com/album/3o5yzVy1ZXMfyATfj9OjbV",
  //       spotifyName: "夏草が邪魔をする - Album by Yorushika | Spotify",
  //       coverPic: "../../../assets/album/1.png"
  //     },
  //     {
  //       id: 1,
  //       name: "NATSUKUSA GA JAMA WO SURU",
  //       year: 2017,
  //       jpname: "夏草が邪魔をする",
  //       translation: "The Summer Grass Is Getting In My Way | The Summer Grass Gets In The Way",
  //       class: "EP / Mini-Album",
  //       trailerUrl: "https://youtu.be/6EgbGnSJnS4",
  //       youtubeName: "ヨルシカ - 夏草が邪魔をする (Album Trailer)",
  //       spotifyUrl: "https://open.spotify.com/album/3o5yzVy1ZXMfyATfj9OjbV",
  //       spotifyName: "夏草が邪魔をする - Album by Yorushika | Spotify",
  //       coverPic: "../../../assets/album/1.png"
  //     }
  // ]


}
