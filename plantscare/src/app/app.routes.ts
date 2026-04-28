import { Routes } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantsFormComponent } from './components/plants-form/plants-form.component';
import { WateringsComponent } from './components/waterings/waterings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'plants',
        component: PlantsComponent
    },
    {
        path: 'plants/:id/edit',
        component: PlantsFormComponent
    },
    {
        path: 'plants/add',
        component: PlantsFormComponent
    },
    {
        path: 'waterings',
        component: WateringsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
    }


];
