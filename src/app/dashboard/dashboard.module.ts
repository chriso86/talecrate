// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Common Modules
import { CommonComponentModule } from '../common/common.component.module';

// Dashboard Modules
import { DashboardToolsComponent } from './tools/dashboard.tools.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';
import { LoreComponent } from './pages/lore/lore.component';
import { ScenesComponent } from './pages/scenes/scenes.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { UserViewsComponent } from './pages/user-views/user-views.component';
import { WorldsComponent } from './pages/worlds/worlds.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { appRoutes } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    DashboardToolsComponent,
    HomeComponent,
    CharactersComponent,
    CollaboratorsComponent,
    LoreComponent,
    ScenesComponent,
    StoriesComponent,
    SubscribersComponent,
    UserViewsComponent,
    WorldsComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
