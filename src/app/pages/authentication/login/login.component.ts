import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { LoginService } from './login.service';

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // send() {
  //   this.router.navigate(['/']);
  //   this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'THANKS', {
  //     duration: 10000
  //   });
  // }

  send(): void {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;

    this.loginService.authenticateUser(username, password).subscribe(
      response => {
        this.router.navigate(['','dashboard']);
        

        // Handle successful authentication here
        console.log('Authentication successful:', response);
         // Navigate to the desired route on success
      },
      error => {
        // Handle authentication error here
        console.error('Authentication error:', error);
        // Display a snackbar or error message to the user
        this.snackbar.open('Authentication failed. Please check your credentials.', 'OK', {
          duration: 5000
        });
      }
    );
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
