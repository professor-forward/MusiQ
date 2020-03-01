import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./modules/navbar/navbar.component";
import { SidebarComponent } from "./modules/sidebar/sidebar.component";
import { AudioPlayerComponent } from "./modules/audio-player/audio-player.component";
import { AlbumContainerComponent } from "./modules/album-container/album-container.component";
import { ArtistDataService } from "./services/artist-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AudioPlayerComponent,
    AlbumContainerComponent,
    routingComponents
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ArtistDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
