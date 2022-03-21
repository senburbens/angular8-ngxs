import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8-ngxs';

  constructor(private router : Router){ }

  public go(){
    this.router.navigate(["/zoo"]);
  }
}
