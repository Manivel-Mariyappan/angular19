import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MakeApiCallService {

    http = inject(HttpClient)

    apiEndPointUrl = "https://jsonplaceholder.typicode.com/comments";

    getComments() {
        return this.http.get<any[]>(this.apiEndPointUrl)
    }


}

