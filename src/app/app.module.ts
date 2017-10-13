// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Story World
import { CommonComponentModule } from './common/common.component.module';
import { WebsiteModule } from './website/website.module';
import { DashboardModule } from './dashboard/dashboard.module';
// TODO: Find a better way to handle routing
import { HomeComponent } from "./dashboard/pages/home/home.component";

// Primary Component
import { AppComponent } from './app.component';

// Routing
const routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // Story World
    WebsiteModule,
    CommonComponentModule,
    DashboardModule,
    // Routing
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
