import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent {
  filterForm = this.fb.group({
      role: ['', Validators.required]
    });
    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}
    onApply() {
      const role = this.filterForm.value.role;
      this.userService.applyRoleFilter(role); 
      this.router.navigate([{ outlets: { modal: null } }]);
    }
    onClear(){
      this.userService.clearFilter(); 
    }
}
