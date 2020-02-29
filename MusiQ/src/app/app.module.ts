import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { AudioPlayerComponent } from './modules/audio-player/audio-player.component';
import { AlbumContainerComponent } from './modules/album-container/album-container.component';
import { ModalLoginComponent } from './modules/modal-login/modal-login.component';
import { ModalRegisterComponent } from './modules/modal-register/modal-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AudioPlayerComponent,
    AlbumContainerComponent,
    ModalLoginComponent,
    ModalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
