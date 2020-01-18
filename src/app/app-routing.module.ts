import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    UpdatedLogComponent,
    SayoControlComponent,
    NotFoundPageComponent
} from './pages';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'update', component: UpdatedLogComponent },
    { path: 'device', component: SayoControlComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const COMPONENTS = [
    UpdatedLogComponent,
    SayoControlComponent,
    NotFoundPageComponent
];
