import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailComponent } from './list/list-detail/list-detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'list',component:ListComponent,
    children:[
      {
        path:'detail',
        component:ListDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
