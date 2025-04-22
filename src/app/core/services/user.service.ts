import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
// import { User } from './models/user.model'; // update path if needed

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  private allUsers: User[] = [];
  users$ = this.usersSubject.asObservable();

  addUser(user: User) {
    const current = this.usersSubject.getValue();
    this.allUsers.push(user);
    this.usersSubject.next([...current, user]);
  }
  applyRoleFilter(role: any) {
    if (!role) {
      this.usersSubject.next([...this.allUsers]); // Reset to all
    } else {
      const filtered = this.allUsers.filter(user => user.role === role);
      this.usersSubject.next(filtered);
    }
  }
  clearFilter() {
    this.usersSubject.next([...this.allUsers]);
  }
}
