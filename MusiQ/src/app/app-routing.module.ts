import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModalLoginComponent } from "./modules/modal-login/modal-login.component";
import { ModalRegisterComponent } from "./modules/modal-register/modal-register.component";

const routes: Routes = [
  {
    path: "login",
    component: ModalLoginComponent
  },
  {
    path: "register",
    component: ModalRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ModalLoginComponent, ModalRegisterComponent];
