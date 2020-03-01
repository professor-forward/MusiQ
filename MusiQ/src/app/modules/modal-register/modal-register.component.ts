import { Component, OnInit } from "@angular/core";
import { UserRegistrationService } from "src/app/services/user-registration.service";

@Component({
  selector: "app-modal-register",
  templateUrl: "./modal-register.component.html",
  // styleUrls: ['./modal-register.component.css']
  styleUrls: ["../../app.component.css"]
})
export class ModalRegisterComponent implements OnInit {
  constructor(private _registration: UserRegistrationService) {}
  public user = {
    email: "",
    password: "",
    rePassword: "",
    dateOfBirth: ""
  };

  ngOnInit(): void {}
  register() {
    console.log(this.user);
    if (this.user.password == this.user.rePassword) {
      this._registration.registerUser(this.user);
      console.log("registering");
    }
  }
}
