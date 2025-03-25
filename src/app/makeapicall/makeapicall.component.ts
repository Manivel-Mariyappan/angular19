import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MakeApiCallService } from './makeapicall.service';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";


@Component({
    selector: 'api-call',
    templateUrl: './makeapicall.component.html',
    imports: [CommonModule]
})

export class MakeapicallComponent implements OnInit {

    http = inject(HttpClient);
    apiService = inject(MakeApiCallService);

    comments: any[] = [];
    isLoading = false;
    comments$!: Observable<any[]>;

    ngOnInit() {
        this.isLoading = true;
        this.apiService.getComments().subscribe((response: any[]) => {
            this.comments = response.sort((a, b) => a.id - b.id);
            this.isLoading = false;
        })
        this.comments$ = this.apiService.getComments();
    }

}