import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { PrnComponent } from './prn/prn.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-emp',component: AddEmpComponent},
  {path: 'product-listing',component: ProductListingComponent},
  {path: 'weather', component: WeatherComponent},
  {path:'pnrNo',component:PrnComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'phone',component:PhoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
