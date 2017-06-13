import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class WebsiteModule { }
