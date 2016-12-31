

import {Component} from "@angular/core";
@Component({
  selector : 'hero-form',
  styles : [`
    .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948;
    }
    .ng-invalid:not(form)  {
      border-left: 5px solid #a94442;
    }
     `],
  template : `
      {{diagnostic}}
      <button type="button" class="btn btn-default" (click)="newHero() ; heroForm.reset()">New Hero</button>
      <div class="container">
       <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" [(ngModel)]="model.name" name="name" id="name"  required
              #name="ngModel" #spy >
         <!-- so it extends the class with its own class which is all these different configurations. --> 
        <br>TODO: remove this: {{spy.className}}
         <div [hidden]="name.valid || name.pristine"
             class="alert alert-danger">
          Name is required
        </div>
      </div>
      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control"  [(ngModel)]="model.alterEgo" name="alterEgo" id="alterEgo">
      </div>
    <div class="form-group">
  <label for="power">Hero Power</label>
  <select class="form-control"  [(ngModel)]="model.power" name="power" required>
    <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
  </select>
    </div>
      <button type="submit" class="btn btn-default" [disabled]="!heroForm.form.valid">Submit</button>
    
    </form>
    
    </div>
      `
})
export class PassionsAndInterestsComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  newHero() {
    this.model = new Hero(42, '', '');
  }
}


export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
