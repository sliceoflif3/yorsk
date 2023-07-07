import { Component } from '@angular/core';
import { Lore } from './lore.interface';
import { LoreService } from './lore.service';

@Component({
  selector: 'app-lore-page',
  templateUrl: './lore-page.component.html',
  styleUrls: ['./lore-page.component.css']
})
export class LorePageComponent {
  lores: Lore[];

  constructor(private loreService: LoreService) { }

  ngOnInit() {
    this.loreService.getLoreList().subscribe(lores => {
      this.lores = lores;
      console.log(this.lores);
    })
  } 
}
