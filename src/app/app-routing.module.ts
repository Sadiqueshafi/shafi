import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GachgharformComponent } from './gachgharform/gachgharform.component';


const routes: Routes = [
  {path:'jachgharform',component:GachgharformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
