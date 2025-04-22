import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  users$ = this.userService.users$;
  roleDistribution: { [key: string]: number } = {};
  chart: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users$.subscribe((users: User[]) => {
      this.updateChart(users);
    });
  }
  

  openUserForm() {
    this.router.navigate([{ outlets: { modal: ['user-form'] } }]);
  }
  openFilterForm() {
    this.router.navigate([{ outlets: { modal: ['filter-form'] } }]);
  }
  clearFilter(){
    this.userService.clearFilter();
  }
  
  updateChart(users: any[]) {
    this.roleDistribution = users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    import('chart.js/auto').then(({ default: Chart }) => {
      if (this.chart) this.chart.destroy();
      const canvas = document.getElementById('roleChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      this.chart = new Chart(ctx!, {
        type: 'pie',
        data: {
          labels: Object.keys(this.roleDistribution),
          datasets: [{
            data: Object.values(this.roleDistribution),
            backgroundColor: ['#1c4980', '#383838', '#797979']
          }]
        }
      });
    });
  }
}
