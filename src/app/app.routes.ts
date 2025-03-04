import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

 
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent)
      },
     
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then((m) => m.ProductsComponent),
      },
     
      
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/details/details.component').then((m) => m.DetailsComponent),
      },
      
    ],
  },
  { path: '**', component: NotfoundComponent },
];
