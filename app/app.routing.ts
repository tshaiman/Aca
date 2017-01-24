import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AdminComponent} from './components/admin/admin.component' ;
import {AboutComponent} from './components/about/about.component' ;

const appRoutes: Routes = [
    {
        path:'',
        component:AdminComponent
    },
    {
        path:'about',
        component:AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);