import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../../shared/services/color.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public color$: Observable<boolean>;

    constructor(private colorService: ColorService) { }

    public ngOnInit(): void {
        this.color$ = this.colorService.color$;
    }
  
}
