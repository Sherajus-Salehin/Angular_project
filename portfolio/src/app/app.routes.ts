import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Journal } from './journal/journal';
import { Projects } from './projects/projects';
import { Art } from './art/art';
import { Photography } from './photography/photography';

export const routes: Routes = [
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component:Home},
    {path:'Journal',component:Journal},
    {path:'Projects',component:Projects},
    {path:'Art',component:Art},
    {path:'Photography',component:Photography}
];
