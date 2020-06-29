import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private strSearchSource = new BehaviorSubject<string>(null);

    public strSearch$ = this.strSearchSource.asObservable();

    public change(query: string): void {
        this.strSearchSource.next(query);
    }
}



