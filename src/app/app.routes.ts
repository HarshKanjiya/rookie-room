import { Routes } from '@angular/router';
import { appRoutes } from './auth/shared/auth.routes';

export const routes: Routes = [
    { path: '', children: appRoutes },
];
