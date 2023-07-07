import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoreService } from '../lore.service';
import { LoreDetail } from '../lore.interface';

@Component({
  selector: 'app-lore-detail',
  templateUrl: './lore-detail.component.html',
  styleUrls: ['./lore-detail.component.css']
})
export class LoreDetailComponent {
  id: number;
  lore: LoreDetail;

  constructor(private route: ActivatedRoute, private service: LoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = +params['id'];
        console.log(this.id);
        this.service.getLoreDetail(this.id).subscribe(lore => {
          this.lore = lore;
          console.log(this.lore);
        });
      });
    };
  
}
