import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}


  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value as User);
      this.router.navigate([{ outlets: { modal: null } }]);
    }
  }
  onClose(){
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}