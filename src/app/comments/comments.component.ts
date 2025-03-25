import { Component, OnInit, inject } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  providers: [ApicallService]
})
export class CommentsComponent implements OnInit {

  private apiService = inject(ApicallService);
  comments:any[] = [];

  ngOnInit() {
     this.apiService.getComments().subscribe((response: any[] = []) => {
       this.comments = response;
     })
  }

}
