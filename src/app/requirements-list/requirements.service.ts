import { EventEmitter, Injectable } from '@angular/core';
import { Requirement } from './requirements.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  eventUpdate = new EventEmitter<Requirement[]>();
  startEdit = new Subject<number>();
  requirements: Requirement[] = [
    new Requirement('Java Script', 'Base knowlage of OOP'),
    new Requirement('HTML, JS, CSS,', 'REST API'),
  ];

  getRequirements() {
    return this.requirements.slice();
  }

  onAddRequirements(requirements: Requirement) {
    this.requirements.push(requirements);
    this.eventUpdate.emit(this.requirements.slice());
  }

  AddRequirements(requirements: Requirement[]) {
    this.requirements.push(...requirements);
    this.eventUpdate.emit(this.requirements.slice());
  }
  getSingleRequirement(index: number) {
    return this.requirements[index];
  }

  updateRequirements(index: number, newReq: Requirement) {
    this.requirements[index] = newReq;
    this.eventUpdate.next(this.requirements.slice());
  }

  deleteRequirement(index: number) {
    this.requirements.splice(index, 1);
    this.eventUpdate.next(this.requirements.slice());
  }
}
