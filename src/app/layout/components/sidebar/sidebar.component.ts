import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { take } from 'rxjs/operators';

import { ColorService } from '../../../shared/services/color.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    public isActive: boolean = false;
    public collapsed: boolean = false;
    public showMenu: string = '';
    public pushRightClass: string = 'push-right';
    public iconSideBar: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        public router: Router,
        private colorService: ColorService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        if (window.innerWidth > 992) {
            this.collapsed = true;
            this.iconSideBar = 'fa fa-arrow-left';
        } else { this.iconSideBar = 'fa fa-bars'; }

    }


    public eventCalled(): void {
        this.isActive = !this.isActive;
    }

    public addExpandClass(element: any): void {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    public toggleCollapsed(): void {
        this.collapsed === true ?
            this.collapsed = false :
            this.collapsed = !this.collapsed;
        if (this.collapsed === false) {
            this.iconSideBar = 'fa fa-arrow-left';
        } else { this.iconSideBar = 'fa fa-bars'; }
        this.collapsedEvent.emit(this.collapsed);
    }

    public isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    public toggleSidebar(): void {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }


    public onLoggedout(): void {
        localStorage.removeItem('isLoggedin');
    }


    public changeColor(): void {
        this.colorService.color$
        .pipe(take(1))
        .subscribe((color) => {
            if (color === true) {
                document.querySelector('html').style.setProperty('--color-header-background', '#f1f2fa');
                document.querySelector('html').style.setProperty('--color-body-background', '#ffffff');
            } else {
                document.querySelector('html').style.setProperty('--color-header-background', '#30383a');
                document.querySelector('html').style.setProperty('--color-body-background', '#1b2021');
            }
            this.colorService.changeColor(!color)
        })
    }



}
