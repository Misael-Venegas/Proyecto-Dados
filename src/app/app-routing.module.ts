import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'un-dado',
    loadChildren: () => import('./un-dado/un-dado.module').then( m => m.UnDadoPageModule)
  },
  {
    path: 'dos-dados',
    loadChildren: () => import('./dos-dados/dos-dados.module').then( m => m.DosDadosPageModule)
  },
  {
    path: 'jugar',
    loadChildren: () => import('./jugar/jugar.module').then( m => m.JugarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
