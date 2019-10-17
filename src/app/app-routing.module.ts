import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'avatar-home', loadChildren: './avatar-home/avatar-home.module#AvatarHomePageModule' },
  { path: 'menu-bar', loadChildren: './menu-bar/menu-bar.module#MenuBarPageModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
