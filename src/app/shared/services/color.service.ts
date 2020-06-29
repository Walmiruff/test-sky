import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ColorService {

    private colorSource = new BehaviorSubject<boolean>(true);

    public color$ = this.colorSource.asObservable();

    public changeColor(color: boolean): void {
        this.colorSource.next(color);
    }
}



