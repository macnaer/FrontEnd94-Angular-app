import { Component, OnInit } from '@angular/core';
import { EventService } from "./event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  selectedEvent: Event;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.eventSelected.subscribe((event: Event) => {
      this.selectedEvent = event;
    });
  }

}
