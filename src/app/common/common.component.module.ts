// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Story World
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StandardButtonComponent } from './components/atoms/standard-button/standard-button.component';
import { IconButtonComponent } from './components/atoms/icon-button/icon-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    StandardButtonComponent,
    IconButtonComponent
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    StandardButtonComponent,
    IconButtonComponent
  ]
})
export class CommonComponentModule { }
