import { Routes, RouterModule } from '@angular/router';

// importing the module directory, not the individual component.
import { HwAppComponent } from 'kee-hw-app-module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/kee-hw-app',
    pathMatch: 'full'
  },
  {
    path: 'kee-hw-app'
  }
];

export const routingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);