import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { take } from 'rxjs/operators';

import { ColorService } from '../../../shared/services/color.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass = 'push-right';
    public sizeFont: number = 0;

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
    }

    public ngOnInit(): void { }

    public isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    public toggleSidebar(): void {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    public rltAndLtr(): void {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rlt');
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
                document.querySelector('html').style.setProperty('--color-second', '#000');

            } else {
                document.querySelector('html').style.setProperty('--color-header-background', '#30383a');
                document.querySelector('html').style.setProperty('--color-body-background', '#1b2021');
                document.querySelector('html').style.setProperty('--color-second', '#fff');

            }
            this.colorService.changeColor(!color);
        })
    }

    public plusSizeFont(): void {
        if (this.sizeFont < 6) {
            this.sizeFont = this.sizeFont + 2;
            document.querySelector('html').style.setProperty('--size-font', `${this.sizeFont.toString()}px`);
        }
    }

    public minusSizeFont(): void {
        if (this.sizeFont > -6) {
            this.sizeFont = this.sizeFont - 2;
            document.querySelector('html').style.setProperty('--size-font', `${this.sizeFont.toString()}px`);
        }
    }
}
