import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { TempImprintComponent } from './temp-imprint/temp-imprint.component';
import { TempProtectDataComponent } from './temp-protect-data/temp-protect-data.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'imprint', component: TempImprintComponent },
    { path: 'proctect-data', component: TempProtectDataComponent }
];
