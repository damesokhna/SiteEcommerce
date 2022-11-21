import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { ShoesComponent } from './shoes/shoes.component';
import { RouterModule, Routes } from '@angular/router';
import { ListShoesComponent } from './list-shoes/list-shoes.component';

const  shoesRoute : Routes = [
  { path:"list/shoes", component : ListShoesComponent}
]

@NgModule({
  declarations: [
    ShoesComponent,
    ListShoesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shoesRoute)
  ]
})
export class ShoesModule { }
