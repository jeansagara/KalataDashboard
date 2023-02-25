import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(private authService:AuthService,private storageService:StorageService,private route:Router) { }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.route.navigateByUrl("/connexion")
      },
      error: err => {
        console.log(err);
      }
    });
  }

  ngOnInit() {
  }

}
