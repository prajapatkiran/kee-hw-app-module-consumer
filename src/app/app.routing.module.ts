import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HwAppComponent } from 'kee-ng2-webpack';

export const routes: Routes = [
  { path: 'k2', component: HwAppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


  // { path: '', redirectTo: '/kee-hw-app', pathMatch: 'full'},