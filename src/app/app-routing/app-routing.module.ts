import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { CreateeventComponent } from '../createevent/createevent.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { PmoPageComponent } from '../pmo-page/pmo-page.component';
import { PocPageComponent } from '../poc-page/poc-page.component';
import { AssociatePageComponent } from '../associate-page/associate-page.component';
import { ViewEventsComponent } from '../view-events/view-events.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminPage', component: AdminPageComponent, children:[
    { path: 'viewevents', component: ViewEventsComponent},
    { path: 'createevent', component: CreateeventComponent}
    
  ]},
  { path: 'pmoPage', component: PmoPageComponent },
  { path: 'pocPage', component: PocPageComponent },
  { path: 'associatePage', component: AssociatePageComponent }
  
  
];
@NgModule({
  exports:[RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
