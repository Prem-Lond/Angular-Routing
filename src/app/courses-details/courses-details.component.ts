import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
})
export class CoursesDetailsComponent {
  constructor(private router: Router) { }
  
  close() {
    this.router.navigate([{ outlets: { course_datails: null } }]);
  }
}
