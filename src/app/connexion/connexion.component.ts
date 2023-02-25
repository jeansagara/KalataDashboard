import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  form: any = {
    emailadmin: null,
    passwordadmin: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(
    private auth: StorageService,
    private router: Router,
    private ttt:AuthService
   


  ) { }
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.auth.getUser().roles;

    }
  }

  onSubmit(): void {
    const { biometrieOrTelephone, password } = this.form;
    this.ttt.login(biometrieOrTelephone, password).subscribe({
      next: data => {
        this.auth.saveUser(data);
        this.router.navigateByUrl('/dashboard')
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.auth.getUser().roles;

        
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}