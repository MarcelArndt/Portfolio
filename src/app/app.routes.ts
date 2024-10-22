import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { TempImprintComponent } from './temp-imprint/temp-imprint.component';
import { TempProtectDataComponent } from './temp-protect-data/temp-protect-data.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'imprint', component: TempImprintComponent },
    { path: 'proctect-data', component: TempProtectDataComponent},
    { path: '**', component: NotFoundComponent },
    { path: '404', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }