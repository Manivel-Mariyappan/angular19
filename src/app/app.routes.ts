import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactiveform/reactive.form.component';
import { MakeapicallComponent } from './makeapicall/makeapicall.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(e => e.DashboardComponent)
    },
    {
        path: 'comments',
        loadComponent: () => import('./comments/comments.component').then(e => e.CommentsComponent)
    },
    {
        path: 'todos',
        loadComponent: () => import('./todos/todos.component').then(e => e.TodosComponent)
    },
    {
        path: 'forms',
        loadComponent: () => import('./reactiveform/reactive.form.component').then(e => e.ReactiveFormComponent)
    },
    {
        path: 'api-call',
        loadComponent: () => import('./makeapicall/makeapicall.component').then(e => e.MakeapicallComponent)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
