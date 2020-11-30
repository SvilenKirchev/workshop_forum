import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../../../form-styles.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: { email: string, password: string }): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.userService.login(formValue).subscribe((data) => {
      this.isLoading = false;
      this.router.navigate(['/']);
    }, (err) => {
      this.errorMessage = 'ERROR!';
      this.isLoading = false;
    });
  }
}
