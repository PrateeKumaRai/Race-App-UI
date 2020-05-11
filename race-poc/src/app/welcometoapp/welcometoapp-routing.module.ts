import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcometoappPage } from './welcometoapp.page';

const routes: Routes = [
  {
    path: '',
    component: WelcometoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcometoappPageRoutingModule {}
