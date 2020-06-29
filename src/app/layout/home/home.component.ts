import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SkyService } from '../../shared/services/sky.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

    public images = [];
    public movies = [];
    constructor(private skyService: SkyService) { }


    public ngOnInit(): void {
        this.skyService.getFilms().subscribe((films) => {
            this.images = films[0].items;
            this.movies = films[2].movies;
        });
    }

  public scrollToElement($element): void {
        console.log($element);    
        $element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        setTimeout(() => {
            window.scrollTo(window.scrollX ,window.scrollY + 1);
        },1000);

      }
}
