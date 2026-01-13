import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Journal} from './journal/journal';
import { Projects } from './projects/projects';
import { Art } from './art/art';
import { Photography } from './photography/photography';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'journal',component:Journal},
    {path:'projects',component:Projects},
    {path:'art',component:Art},
    {path:'photography',component:Photography},
    {path:'**',redirectTo:'home',pathMatch:'full'},
];
