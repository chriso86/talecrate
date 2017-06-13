// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Google Material Design
import { MdButtonModule, MdCardModule, MdGridListModule } from '@angular/material';

// Story World
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonComponentModule { }
