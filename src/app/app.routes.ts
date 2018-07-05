import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: '', component: Page1Component},
    {path: 'page-2', component: Page2Component}
];
