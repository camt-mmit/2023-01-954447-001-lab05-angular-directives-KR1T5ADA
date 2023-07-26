import { Routes } from '@angular/router';
import { TryOneComponent } from './try-one/try-one.component';
import { TryTwoComponent } from './try-two/try-two.component';
import { TryThreeComponent } from './try-three/try-three.component';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';

export const routes: Routes = [
  { path: 'try-one', component: TryOneComponent },
  { path: 'try-two', component: TryTwoComponent },
  { path: 'try-three', component: TryThreeComponent },
  { path: 'lab05', component: DynamicSectionComponent },
];
