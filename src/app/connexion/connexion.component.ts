import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        this.isLoginFailed = false;
        this.roles = this.auth.getUser().roles;
        if(this.roles[0]=="ROLE_ADMIN"){
          this.isLoggedIn = true;
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: true,
            // timer: 1500
          })
        }
      },
      error:err=>{
        this.errorMessage = err.error.message;
        this.isLoginFailed=true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}