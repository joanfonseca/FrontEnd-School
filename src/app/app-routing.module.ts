import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router'

import { NotfountComponent } from './modules/common/notfount/notfount.component'
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules
}
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/lobby/lobby.module').then(module => module.LobbyModule)
  },
  { path: 'not-found', component: NotfountComponent },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
