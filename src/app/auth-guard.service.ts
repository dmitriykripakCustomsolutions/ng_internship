import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = localStorage.getItem('userName');

    if (currentUser && (currentUser === 'Dima' || currentUser === 'Sasha')) {
      return true;
    } else {
      this.router.navigate(['/first']);
      return false;
    }

  }

  constructor(private router: Router) { }
}
