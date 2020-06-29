import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
    public headerHidden: boolean;
    
    constructor() {
        if (window.innerWidth >= 992) {
            this.headerHidden = false;
        } else { this.headerHidden = true; }
    }


    public ngOnInit(): void { }
}
