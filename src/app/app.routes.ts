import { Routes } from '@angular/router';
import { NotificationComponent } from './page/notification/notification.component';
import { MainPageComponent } from './page/main-page/main-page.component';

export const routes: Routes = [
    {
        path:"",
        component:MainPageComponent
    },
    {
        path:"notification",
        component:NotificationComponent
    }
];
