
import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class IsAdminGuard implements CanActivate {

  canActivate() {
    alert.pop()
    return false;
  }
}