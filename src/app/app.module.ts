import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventDetailsComponent } from "./event/event-details/event-details.component";
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventItemComponent } from './event/event-list/event-item/event-item.component';
import { EventService } from './event/event.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventDetailsComponent,
    EventComponent,
    EventListComponent,
    EventItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
