import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultistepformComponent } from './components/multistepform/multistepform.component';
import { MultiformComponent } from './multiform/multiform.component';

const routes: Routes = [
  {path:'multi',component:MultistepformComponent},
  {path:'',component:MultiformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
