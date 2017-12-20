import { Routes } from '@angular/router';

import { LoginComponent } from 'app/common/login/login.component';
import { DashboardComponent } from 'app/dashboard/dashboard/dashboard.component';
import { HomeComponent } from 'app/dashboard/pages/home/home.component';
import { CharactersComponent } from 'app/dashboard/pages/characters/characters.component';
import { CollaboratorsComponent } from 'app/dashboard/pages/collaborators/collaborators.component';
import { LoreComponent } from 'app/dashboard/pages/lore/lore.component';
import { ScenesComponent } from 'app/dashboard/pages/scenes/scenes.component';
import { StoriesComponent } from 'app/dashboard/pages/stories/stories.component';
import { SubscribersComponent } from 'app/dashboard/pages/subscribers/subscribers.component';
import { UserViewsComponent } from 'app/dashboard/pages/user-views/user-views.component';
import { WorldsComponent } from 'app/dashboard/pages/worlds/worlds.component';
import { AboutComponent } from 'app/website/about/about.component';
import { ContactComponent } from 'app/website/contact/contact.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'characters',
                component: CharactersComponent
            },
            {
                path: 'collaborators',
                component: CollaboratorsComponent
            },
            {
                path: 'lore',
                component: LoreComponent
            },
            {
                path: 'scenes',
                component: ScenesComponent
            },
            {
                path: 'stories',
                component: StoriesComponent
            },
            {
                path: 'subscribers',
                component: SubscribersComponent
            },
            {
                path: 'user-views',
                component: UserViewsComponent
            },
            {
                path: 'worlds',
                component: WorldsComponent
            }
        ]
    }
]
