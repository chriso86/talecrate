// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Semantic UI
import { SuiModule, SuiDropdownModule } from 'ng2-semantic-ui';

// Story World
import { CommonComponentModule } from './common/common.component.module';
import { WebsiteModule } from './website/website.module';
import { DashboardModule } from './dashboard/dashboard.module';
// TODO: Find a better way to handle routing
import { HomeComponent } from './dashboard/pages/home/home.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';

// Primary Component
import { AppComponent } from './app.component';
import { SuiAccordion } from 'ng2-semantic-ui/dist';

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
    // Semantic UI
    SuiModule,
    // Story World
    WebsiteModule,
    CommonComponentModule,
    DashboardModule,
    // Routing
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
