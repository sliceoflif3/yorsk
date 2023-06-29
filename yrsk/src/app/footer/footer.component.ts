import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerText = 'This non-profit website is created based on [ヨルシカ] Yorushika Master Document, and is not officially related to Yorushika or Universal Music Japan';
}
