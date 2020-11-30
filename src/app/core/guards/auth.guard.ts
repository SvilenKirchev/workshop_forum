import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../../user/user.service';
import {Observable, of} from 'rxjs';
import {IUser} from '../../shared/interfaces';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    if (this.userService.currentUser === undefined) {
      stream$ = this.userService.getCurrentUserProfile();
    } else {
      stream$ = of(this.userService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) {
          return;
        }
        const url = this.router.url;
        this.router.navigateByUrl(url);
      }),
    );
  }
}
