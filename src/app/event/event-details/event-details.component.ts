import { Component, OnInit } from '@angular/core';
import { Event } from "../event.model";
import { EventService } from "../event.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  index: number;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      console.log("id = ", this.index);
      this.event = this.eventService.getSingleEvent(this.index);
    });
  }

}
