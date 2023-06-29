import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = "Yorushika | ヨルシカ";
  description: string = "Yorushika (ヨルシカ) is a Japanese rock duo founded in 2017 represented by Universal Music Japan. The group is composed of N-buna, a former vocaloid music producer, and Suis, a female vocalist. They are known for their juxtaposition of \"passionate\" and \"upbeat\" production and instrumentation fused with heavier lyrical content, which often explore ideas such as love and human emotion and draw from works of literature including Masuji Ibuse and Jules Verne. The name \"Yorushika\" is taken from a lyric in their song \"Kumo to Yūrei\" (雲と幽霊): \"Yoru shika mō nemurezu ni\" (夜しかもう眠れずに, meaning \"I can only sleep at night\"). The eye-designed logo mark is a motif of two moons facing each other and also serves as a clock hand, portraying the time \"from 6:00 to night\".";
  logoUrl: string = "../../../assets/logo/Yorushika_Logo.jpg";

}
