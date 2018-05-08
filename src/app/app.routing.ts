import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path:  'detail/:id',
    component: DetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
