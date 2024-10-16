import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { MolarComponent } from './molar/molar.component';
import { NasaapiComponent } from './nasaapi/nasaapi.component';
import { SintonyComponent } from './sintony/sintony.component';
import { CatlearnComponent } from './catlearn/catlearn.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    TodolistComponent,
    MolarComponent,
    NasaapiComponent,
    SintonyComponent,
    CatlearnComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    RouterModule,
    SharedModule
]
})
export class ProjectsModule { }
