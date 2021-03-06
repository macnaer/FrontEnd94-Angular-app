import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Requirement } from '../requirements.model';
import { RequirementsService } from '../requirements.service';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requirements-detail',
  templateUrl: './requirements-detail.component.html',
  styleUrls: ['./requirements-detail.component.scss']
})
export class RequirementsDetailComponent implements OnInit {

  @ViewChild('form') reqForm: NgForm;
  constructor(private requirementService: RequirementsService) {}
  subscription: Subscription;
  editMode = false;
  editedItem: number;
  editedRequirement: Requirement;

  onAddItem(form: NgForm) {
    const skills = form.value.skills;
    const description = form.value.description;
    const newRequirement = new Requirement(skills, description);
    if (this.editMode) {
      this.requirementService.updateRequirements(
        this.editedItem,
        newRequirement
      );
    } else {
      this.requirementService.onAddRequirements(newRequirement);
    }
    form.reset();
    this.editMode = false;
  }
  onClear() {
    this.reqForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.requirementService.deleteRequirement(this.editedItem);
    this.onClear();
  }

  ngOnInit(): void {
    this.subscription = this.requirementService.startEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItem = index;
        this.editedRequirement = this.requirementService.getSingleRequirement(
          index
        );
        this.reqForm.setValue({
          skills: this.editedRequirement.name,
          description: this.editedRequirement.description,
        });
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
