import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    constructor() {}

    public ngOnInit(): void {
    }
    public receiveCollapsed($event): void {
        this.collapedSideBar = $event;
    }
}
