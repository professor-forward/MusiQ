import { Component, OnInit } from "@angular/core";
import { ArtistDataService } from "src/app/services/artist-data.service";
import { AudioPlayerComponent } from "../audio-player/audio-player.component";

@Component({
  selector: "app-album-container",
  templateUrl: "./album-container.component.html",
  // styleUrls: ['./album-container.component.css']
  styleUrls: ["../../app.component.css"]
})
export class AlbumContainerComponent implements OnInit {
  constructor(
    private _artistDataService: ArtistDataService // private _p: AudioPlayerComponent
  ) {}
  public artistInfo = [];
  ngOnInit(): void {
    this.artistInfo = this._artistDataService.getArtistInfo();
  }
  selectArtist(artist) {
    this._artistDataService.setCurrentSelectedArtist(artist);
    alert(`Currently playing ${artist.artistName}\nTrack: ${artist.trackName}`);
    // this._p.update();
  }
}
