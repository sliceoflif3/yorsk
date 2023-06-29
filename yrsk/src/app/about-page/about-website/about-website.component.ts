import { Component } from '@angular/core';

@Component({
  selector: 'app-about-website',
  templateUrl: './about-website.component.html',
  styleUrls: ['./about-website.component.css']
})
export class AboutWebsiteComponent {
  about: string = "About this website";
  content1: string = "This website is created and based its content on [ヨルシカ] Yorushika Master Document (Link will be included in Credits section), which is made by Relapse. The document may contain outdated content and errors. Some parts will have Youtube Video links, you can hover over them and click “Open Preview” so you can play the song while on this document's tab. Song links will only have Spotify.";
  content2: string = "Parts of this document and translations were only pulled from other documents and were copied here. These will contain a link to their original source. If there are any errors on their part of the document, you may contact their respective authors. Otherwise, you may contact me. I also have more information in the “Appendix” section.";
}
