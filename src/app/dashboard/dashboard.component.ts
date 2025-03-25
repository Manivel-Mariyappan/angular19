import { Component, inject } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [ApicallService]
})
export class DashboardComponent {

  private service = inject(ApicallService);
  comments: any[] = [];

  userClickEvent() {
    console.log('This is event ');
    this.service.gettodos().subscribe((response: any[] = []) => {
      this.comments = response;
    });
  }

}
