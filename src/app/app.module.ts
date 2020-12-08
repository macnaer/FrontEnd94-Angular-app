import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventDetailsComponent } from "./event/event-details/event-details.component";
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventItemComponent } from './event/event-list/event-item/event-item.component';
import { EventService } from './event/event.service';
import { RequirementsService } from './requirements-list/requirements.service';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { RequirementsDetailComponent } from './requirements-list/requirements-detail/requirements-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventDetailsComponent,
    EventComponent,
    EventListComponent,
    EventItemComponent,
    RequirementsListComponent,
    RequirementsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventService, RequirementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
