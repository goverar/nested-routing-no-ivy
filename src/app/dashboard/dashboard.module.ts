import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
