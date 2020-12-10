import { Injectable } from '@angular/core';
import { EventService } from "../event/event.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private eventService: EventService, private http: HttpClient) {}
  private URL = 'https://front-end-94-events-default-rtdb.europe-west1.firebasedatabase.app/events.json';
  storeEvents() {
    const events = this.eventService.getEvents();
    return this.http
      .put(this.URL, events)
      .subscribe((responce) => console.log(responce));
  }
}
