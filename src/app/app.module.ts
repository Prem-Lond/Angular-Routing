import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagetNotFoundComponent } from './paget-not-found/paget-not-found.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { ProductComponent } from './product/product.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { TrouserComponent } from './trouser/trouser.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { PremComponent } from './prem/prem.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagetNotFoundComponent,
    EmployeListComponent,
    EmployeDetailsComponent,
    ProductComponent,
    TShirtComponent,
    TrouserComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    PremComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
