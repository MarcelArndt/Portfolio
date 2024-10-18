import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { TempImprintComponent } from './temp-imprint/temp-imprint.component';
import { TempProtectDataComponent } from './temp-protect-data/temp-protect-data.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'imprint', component: TempImprintComponent },
    { path: 'proctect-data', component: TempProtectDataComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }