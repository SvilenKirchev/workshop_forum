import {Routes, RouterModule} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {NewComponent} from './new/new.component';
import {ThemeComponent} from './theme/theme.component';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'theme',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemeComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'new',
        component: NewComponent,
        data: {
          isLogged: true
        }
      }
    ]
  }
];

export const ThemeRouterModule = RouterModule.forChild(routes);
