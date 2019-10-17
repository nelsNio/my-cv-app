import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AvatarHomePage} from '../avatar-home/avatar-home.page'
import {MenuBarPage} from '../menu-bar/menu-bar.page'
import { HomePage } from './home.page';
import { from } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,AvatarHomePage,MenuBarPage]
})
export class HomePageModule {}
