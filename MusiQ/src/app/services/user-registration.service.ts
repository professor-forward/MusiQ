import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserRegistrationService {
  constructor(private _http: HttpClient) {}

  registerUser(user) {
    this._http
      .post("http://localhost:8083/api/register", user)
      .subscribe(data => {
        alert(JSON.stringify(data));
      });
  }
}
