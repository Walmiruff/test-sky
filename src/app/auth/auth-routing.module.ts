import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'prefix' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
            { path: 'reset', loadChildren: './reset/reset.module#ResetModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
