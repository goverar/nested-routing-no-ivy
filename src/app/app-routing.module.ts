import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard-routing.module`).then(m => m.DashboardRoutingModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'document', loadChildren: () => import('./document/document.module').then(m => m.DocumentModule) },
  { path: 'logs', loadChildren: () => import('./logs/logs.module').then(m => m.LogsModule) },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'logs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
