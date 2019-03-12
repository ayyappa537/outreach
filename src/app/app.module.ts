import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateeventComponent } from './createevent/createevent.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PmoPageComponent } from './pmo-page/pmo-page.component';
import { PocPageComponent } from './poc-page/poc-page.component';
import { AssociatePageComponent } from './associate-page/associate-page.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { FavoriteEventsComponent } from './favorite-events/favorite-events.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreatebulkeventComponent } from './createbulkevent/createbulkevent.component';
import { CreatebulkregistrationComponent } from './createbulkregistration/createbulkregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    CreateeventComponent,
    AdminPageComponent,
    PmoPageComponent,
    PocPageComponent,
    AssociatePageComponent,
    LeftNavComponent,
    ViewEventsComponent,
    RegisterEventComponent,
    MyEventsComponent,
    FavoriteEventsComponent,
    CreateRoleComponent,
    CreatebulkeventComponent,
    CreatebulkregistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
