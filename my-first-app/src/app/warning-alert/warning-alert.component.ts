import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p {
        border: 3px solid red;
        width: 300px;
        padding: 15px;
      }
    `,
  ],
})
export class WarningAlertComponent {}
