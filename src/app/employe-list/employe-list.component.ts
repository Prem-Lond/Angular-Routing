import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
})
export class EmployeListComponent implements OnInit {

  myEmployes = [
    {
      id: 1,
      name: 'prem lond',
    },
    {
      id: 2,
      name: 'nisha kamble',
    },
    {
      id: 3,
      name: 'rajkumar lond',
    },
    {
      id: 4,
      name: 'sushila lond',
    },
  ];
  constructor(private router: Router,
  private route : ActivatedRoute) {
    
  }

  empClick(id: number) {
    this.router.navigate(['./employes',id])
  }


  value: any;
  ngOnInit(): void { 
    // this.value = this.route.snapshot.paramMap.get('keyId');
     this.route.paramMap.subscribe((param: ParamMap) => {
      this.value = param.get('keyId');
    });

  }

  isSelected(employe: any) {
    return parseInt(employe.id) === parseInt(this.value);
  }
  

}
