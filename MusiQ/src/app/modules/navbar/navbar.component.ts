import { Component, OnInit } from "@angular/core";
import { ModalLoginComponent } from "../modal-login/modal-login.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  // styleUrls: ['./navbar.component.css']
  styleUrls: ["../../app.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  viewLoginModal() {
    // modal.style.display = "none";
    console.log("Login");
  }

  viewRegisterationModal() {
    console.log("Registration");
    // modal.style.display = "none";
    //   modal.style.display = "block";
  }
}
