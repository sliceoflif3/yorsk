import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>('https://yrsk-d4b11-default-rtdb.asia-southeast1.firebasedatabase.app/albums.json'); //replace this with actual API endpoint later
  }

  getSongs(albumId: number): Observable<any[]> {
    return this.http.get<any[]>('https://yrsk-d4b11-default-rtdb.asia-southeast1.firebasedatabase.app/songs.json').pipe(
      map((response: any[]) => {
        const album = response.find((item) => item.id === albumId);
        return album ? album : [];
      })
    );
  }

  
}
