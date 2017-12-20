// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Semantic UI
import { SuiModule, SuiDropdownModule } from 'ng2-semantic-ui';

// Story World
import { CommonComponentModule } from './common/common.component.module';
import { WebsiteModule } from './website/website.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Primary Component
import { AppComponent } from './app.component';
import { SuiAccordion } from 'ng2-semantic-ui/dist';

// Routing
import { appRoutes } from './app.routing';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
