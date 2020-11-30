import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {NewComponent} from './new/new.component';
import {ThemeComponent} from './theme/theme.component';

const routes: Routes = [
  {
    path: 'theme',
    pathMatch: 'full',
    component: ThemeComponent
  },
  {
    path: 'theme/detail/:id',
    component: DetailComponent
  },
  {
    path: 'theme/new',
    component: NewComponent
  }
];

export const ThemeRouterModule = RouterModule.forChild(routes);
