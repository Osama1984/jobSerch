import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { JobpageComponent } from './components/jobpage/jobpage.component';

export const routes: Routes = [
    {path:'', redirectTo:'jobs', pathMatch:'full'},
    {path:'jobs', component:JobsComponent},
    {path:'favorites', component:FavoritesComponent},
    {path:'job/:id', component:JobpageComponent}
];
