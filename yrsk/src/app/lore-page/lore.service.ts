import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Lore, LoreDetail } from './lore.interface';

@Injectable({
  providedIn: 'root'
})
export class LoreService {

  constructor(private http: HttpClient) { }

  getLoreList(): Observable<Lore[]> {
    return this.http.get<Lore[]>('https://yrsk-d4b11-default-rtdb.asia-southeast1.firebasedatabase.app/lores.json'); //replace this with actual API endpoint later
  }

  getLoreDetail(id: number): Observable<LoreDetail> {
    return this.http.get<any[]>(`https://yrsk-d4b11-default-rtdb.asia-southeast1.firebasedatabase.app/lore-details.json`).pipe(
      map((response: any[]) => {
        const lore = response.find((item) => item.id === id);
        console.log(lore);
        return lore ? lore : [];
      })
    );
  }
}
