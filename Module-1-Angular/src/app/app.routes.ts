import { Routes } from '@angular/router';
import { Ngif } from './components/ngif/ngif';

export const routes: Routes = [
    {
        path:"**", component: Ngif
    }
];
