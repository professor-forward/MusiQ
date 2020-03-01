import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserAuthenticationService {
  constructor(private _http: HttpClient) {}

  authenticateUser(user) {
    this._http.post("http://localhost:8083/api/login", user).subscribe(data => {
      alert(JSON.stringify(data));
    });
  }
}
