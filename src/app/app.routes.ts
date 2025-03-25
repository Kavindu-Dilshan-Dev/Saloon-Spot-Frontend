import { Routes } from '@angular/router';
import { NotificationComponent } from './page/notification/notification.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { BookingComponent } from './page/booking/booking.component';
import { SaloonDetailComponent } from './page/saloon-detail/saloon-detail.component';

export const routes: Routes = [
    {
        path:"",
        component:MainPageComponent
    },
    {
        path:"notification",
        component:NotificationComponent
    },
    {
        path:"booking",
        component:BookingComponent
    },
    {
        path:"saloon-detail",
        component:SaloonDetailComponent
    }
];
