import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {PagerService} from './services/pager/pager.service';
import {ModalService} from './services/modal/modal.service';
import { HeaderComponent } from './components/header/header.component'
import {appRoutes} from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './pages/demo/demo.component';
import { PagerComponent } from './pages/pager/pager.component';
import { ModalComponent } from './pages/modal/modal.component';
import { ModalBoxComponent } from './components/modal-box/modal-box.component';
import { ModalBoxDirective } from './directive/modal-box.directive';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    HeaderComponent,
    HomeComponent,
    DemoComponent,
    PagerComponent,
    ModalComponent,
    ModalBoxComponent,
    ModalBoxDirective,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PagerService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
