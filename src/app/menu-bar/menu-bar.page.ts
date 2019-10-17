import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.page.html',
  styleUrls: ['./menu-bar.pag.css'],
})
export class MenuBarPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuBarPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}



