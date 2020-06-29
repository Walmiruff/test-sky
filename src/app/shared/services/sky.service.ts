import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SkyService {

    private url = environment.url;

    constructor(private http: HttpClient) { }

    public getFilms(): Observable<Object> {
        return this.http.get(this.url)
    }

}



