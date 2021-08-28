import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = '';
  showDetails = false;
  log = [];

  showIt() {
    this.showDetails = !this.showDetails;
  }

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
