import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://.com'

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/data`);
    }
}