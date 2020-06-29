import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { SearchService } from '../../../shared/services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    formulario: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private searchService: SearchService
    ) { }

    public ngOnInit(): void {
        this.configurarFormulario();
        this.formulario.controls.search.valueChanges
            .pipe(debounceTime(900))
            .subscribe(result => this.searchService.change(result));
    }

    public configurarFormulario(): void {
        this.formulario = this.formBuilder.group({
            search: [null],
        });
    }
  
}
