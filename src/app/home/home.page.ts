import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  locaties : string[] = ['LU Herentals','LU Beveren','LU Nantes'];

  metenMaar() {
    console.log("logging");
  }

  constructor() {}

}
