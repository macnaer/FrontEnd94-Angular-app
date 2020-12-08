
import { Requirement } from '../requirements-list/requirements.model';

export class Event {
    public name: string;
    public description: string;
    public imagePath: string;
    public requirements: Requirement[];

  
    constructor(name: string, desc: string, imagePath: string, requirements: Requirement[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.requirements = requirements;
    }
  }
  