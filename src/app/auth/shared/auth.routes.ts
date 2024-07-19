import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: "login", loadComponent: () => import('../login-page/login-page.component').then(_ => _.LoginPageComponent) },
    { path: "signup", loadComponent: () => import('../signup-page/signup-page.component').then(_ => _.SignupPageComponent) },
    { path: "reset-password", loadComponent: () => import('../reset-pass-page/reset-pass-page.component').then(_ => _.ResetPassPageComponent) },
];
