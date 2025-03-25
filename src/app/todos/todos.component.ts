import { Component, inject, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [ApicallService]
})
export class TodosComponent implements OnInit {

  private service = inject(ApicallService);
  todos: any[] = []

  ngOnInit() {
    this.service.gettodos().subscribe((response: any[] = []) => {
      this.todos = response;
    })
  }
}
