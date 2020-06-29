import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', loadChildren: './home/home.module#HomeModule'},
            { path: 'films', loadChildren : './films/films.module#FilmsModule' },
            { path: 'series', loadChildren : './series/series.module#SeriesModule' },
            { path: 'channels', loadChildren : './channels/channels.module#ChannelsModule' },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
