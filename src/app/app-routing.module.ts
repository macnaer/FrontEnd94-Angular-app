import { NgModule } from '@angular/core';
import { EventComponent } from "./event/event.component";
import { EventDetailsComponent } from "./event/event-details/event-details.component";
import { Routes, RouterModule } from '@angular/router';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';

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
  { path: 'requirements', component: RequirementsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
