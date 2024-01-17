import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css'],
})
export class EmployeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  id: any;
  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
  }

  selectedId: any;
  previous() {
    this.selectedId = this.id;
    this.router.navigate(['/employes', { keyId: this.selectedId }]);
  }

  priviousEmp() {
    let priviousId = parseInt(this.id) - 1;
    this.router.navigate(['/employes', priviousId]);
  }
  nextEmp() {
    let nextId = parseInt(this.id) + 1;
    this.router.navigate(['/employes', nextId]);
  }

  
}
