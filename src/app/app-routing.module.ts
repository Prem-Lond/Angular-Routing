import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
 

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,

    children: [
      {
        path: 't-shirt',
        component: TShirtComponent,
      },
      {
        path: 'trouser',
        component: TrouserComponent,
      },
    ],
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'courseDetails',
    outlet: 'course_datails',
    component: CoursesDetailsComponent,
  }, {
    path: 'prem',
    outlet: 'outletName',
   component:PremComponent
  },

  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',

    component: ContactComponent,
  },
  {
    path: 'employes',
    component: EmployeListComponent,
  },
  {
    path: 'employes/:id',
    component: EmployeDetailsComponent,
  },
  {
    path: '**',
    component: PagetNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
