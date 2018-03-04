// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Semantic UI
import { SuiDropdownModule } from 'ng2-semantic-ui';

// Story World
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    SuiDropdownModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    LandingPageComponent
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent
  ]
})
export class CommonComponentModule { }
