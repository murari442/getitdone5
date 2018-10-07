import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { OurWorkComponent } from "./our-work/our-work.component";
import { ContactComponent } from "./contact/contact.component";
import { BookingComponent } from "./booking/booking.component";

const routes: Routes = [
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'ourwork',component: OurWorkComponent},
    {path: 'booking',component: BookingComponent},
    {path: 'contacts',component: ContactComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
