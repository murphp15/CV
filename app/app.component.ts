import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  styleUrls: ['app.component.css'],
  selector: 'my-app',
  template: `<h1>Paul Murphy's CV</h1>
      <nav>
       <a routerLink="/passions_and_interests">Passions and Interests</a>
       <a routerLink="/Backend_experience">Backend Programming Experience</a>
       <a routerLink="/Frontend_experience">Frontend Design Experience</a>
      </nav>
       <router-outlet></router-outlet>`,
})
export class AppComponent  {
}
