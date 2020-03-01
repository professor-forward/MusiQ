import { Component, OnInit } from "@angular/core";
import { UserAuthenticationService } from "src/app/services/user-authentication.service";

@Component({
  selector: "app-modal-login",
  templateUrl: "./modal-login.component.html",
  // styleUrls: ['./modal-login.component.css']
  styleUrls: ["../../app.component.css"]
})
export class ModalLoginComponent implements OnInit {
  constructor(private _userAuthentication: UserAuthenticationService) {}

  ngOnInit(): void {}
  public user = { email: "", password: "" };
  loginUser() {
    this._userAuthentication.authenticateUser(this.user);
  }
}
