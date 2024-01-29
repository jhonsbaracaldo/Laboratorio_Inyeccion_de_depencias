import { Component } from '@angular/core';
import { ShowService } from './show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-injection';

  constructor(private showService: ShowService) { }

get items() {
   return this.showService.items;
}
}


