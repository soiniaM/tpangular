import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SaleAdListComponent } from './sale-ad-list/sale-ad-list.component';

const routes: Routes = [
  { path: "", component:LoginComponent},
  { path: "login", component:LoginComponent},
  { path: "list", component:SaleAdListComponent},
  { path: "**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
