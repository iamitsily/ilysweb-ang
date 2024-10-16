import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { MolarComponent } from './molar/molar.component';
import { NasaapiComponent } from './nasaapi/nasaapi.component';
import { SintonyComponent } from './sintony/sintony.component';
import { CatlearnComponent } from './catlearn/catlearn.component';

const routes: Routes = [
  {
    path: 'todolist',
    component: TodolistComponent
  },
  {
    path: 'molar',
    component: MolarComponent
  },
  {
    path: 'nasaapi',
    component: NasaapiComponent
  },
  {
    path: 'sintony',
    component: SintonyComponent
  },
  {
    path: 'catlearn',
    component: CatlearnComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
