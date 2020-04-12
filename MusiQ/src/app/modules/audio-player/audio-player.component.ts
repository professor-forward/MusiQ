import { Component, OnInit } from "@angular/core";
import { ArtistDataService } from "src/app/services/artist-data.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-audio-player",
  templateUrl: "./audio-player.component.html",
  // styleUrls: ['./audio-player.component.css']
  styleUrls: ["../../app.component.css"],
})
export class AudioPlayerComponent implements OnInit {
  audio = new Audio("../../../assets/audio-1.mp3");
  // artistName = "Wanye Kest";
  // trackName = "Clocks";

  iconChange = "fa-play";
  public artist = {
    artistName: "Will Carpenter",
    trackName: "Weird Singing Noise",
    albumCover: "../../assets/album-1.jpeg",
    URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-1.mp3",
  };
  constructor(
    private _artistDataService: ArtistDataService,
    private _http: HttpClient
  ) {
    // this.update();
  }
  ngDoCheck() {
    this.update();
    this.play();
  }

  ngOnInit(): void {
    this.update();
    this._artistDataService.currentSelectedArtist;
  }
  update() {
    this.artist.URL = this._artistDataService.currentSelectedArtist.URL;
    this.audio.src = this.artist.URL;
    // this.audio.pause();
    this.artist.albumCover = this._artistDataService.currentSelectedArtist.albumCover;
    this.artist.artistName = this._artistDataService.currentSelectedArtist.artistName;
    this.artist.trackName = this._artistDataService.currentSelectedArtist.trackName;
  }

  play() {
    if (this.audio.paused) {
      this.audio.play();
      this.iconChange = "fa-pause";
    } else {
      this.audio.pause();
      this.iconChange = "fa-play";
    }
  }
  next() {
    this._artistDataService.getNextArtist();
    this.update();
    console.log(this.artist);
  }
  previous() {
    this._artistDataService.getPrevArtist();
    // this.update();
  }
}
