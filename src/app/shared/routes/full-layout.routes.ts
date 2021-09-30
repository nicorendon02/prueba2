import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('../../prueba/prueba.module').then(m => m.PruebaModule)
  },
  {
    path: 'challenge',
    loadChildren: () => import('../../challenge/challenge.module').then(m => m.ChallengeModule)
  }
];
