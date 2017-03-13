import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {DemoComponent} from './pages/demo/demo.component';
import {PagerComponent} from './pages/pager/pager.component';
import {ModalComponent} from './pages/modal/modal.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

export const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: '', 
        component: PagerComponent,
      },
      {
        path: 'modal', 
        component: ModalComponent,
      }
    ]
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  { path: '**', redirectTo: '' }
];