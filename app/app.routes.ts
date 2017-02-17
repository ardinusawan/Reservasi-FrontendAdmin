import { Routes, RouterModule } from '@angular/router';

import { BookingListComponent } from './booking-list.component';
import { BookingDetailsComponent } from './booking-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/booking' to the booking list component
  {
    path: 'booking',
    component: BookingListComponent,
  },
  // map '/booking/:id' to person details component
  {
    path: 'booking/:id',
    component: BookingDetailsComponent
  },
  // map '/' to '/booking' as our default route
  {
    path: '',
    redirectTo: '/booking',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
