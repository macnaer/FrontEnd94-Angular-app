import { NgModule } from '@angular/core';
import { EventComponent } from "./event/event.component";
import { EventDetailsComponent } from "./event/event-details/event-details.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'events',
    component: EventComponent,
    children: [
      // { path: '', component: EventStartComponent },
      // { path: 'new', component: EventEditComponent },
      {
        path: ':id',
        component: EventDetailsComponent,
      },
      // {
      //   path: ':id/edit',
      //   component: EventEditComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
