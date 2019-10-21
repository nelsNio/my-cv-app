import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private iab: InAppBrowser;
  constructor(){
  }

  openLink() {
    window.location.href = 'https://www.linkedin.com/in/n-andres-niño';
  }
  openLinkPage() {
    window.location.href = 'https://www.andresnino.tech';
  }
  openLinkCvlac() {
    window.location.href = 'https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000145438';
  }

}
