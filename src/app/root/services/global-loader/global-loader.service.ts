import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {

  private _loaderVisibilitySubject = new BehaviorSubject<boolean>(false);
  get loaderVisibility$() {
    return this._loaderVisibilitySubject.asObservable();
  }

  constructor() { }

  showLoader() {
    if (this._loaderVisibilitySubject.value === false) {
      this._loaderVisibilitySubject.next(true);
    }
  }

  hideLoader() {
    if (this._loaderVisibilitySubject.value === true) {
      this._loaderVisibilitySubject.next(false);
    }
  }
}
