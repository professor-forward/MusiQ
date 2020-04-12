import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ArtistDataService {
  constructor() {}

  private data = [
    {
      artistName: "Erik Conta",
      trackName: "All Time Low",
      albumCover:
        "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-1.jpeg",
      URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-1.mp3",
    },
    {
      artistName: "Tiny Wayne",
      trackName: "I Can't Sing",
      albumCover:
        "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-2.jpeg",
      URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-2.mp3",
    },
    {
      artistName: "Big Daddy",
      trackName: "Small Son Noises",
      albumCover:
        "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-3.jpeg",
      URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-3.mp3",
    },
    {
      artistName: "Wanye Kest",
      trackName: "I Am Confused",
      albumCover:
        "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-4.jpeg",
      URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-4.mp3",
    },
    {
      artistName: "Albama Man",
      trackName: "Country Noises",
      albumCover:
        "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-5.jpeg",
      URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-5.mp3",
    },
    {
      artistName: "Will Carpenter",
      trackName: "Weird Singing Noise",
      albumCover:
        "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-6.jpeg",
      URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-6.mp3",
    },
  ];
  count = 0;
  public currentSelectedArtist = this.data[this.count];
  setCurrentSelectedArtist(artist) {
    this.currentSelectedArtist = artist;
    console.log(this.currentSelectedArtist);
  }
  getCurrentArist() {
    this.currentSelectedArtist;
  }
  getNextArtist() {
    if (this.count == this.data.length - 1) {
      this.count = 0;
    }
    this.setCurrentSelectedArtist(this.data[this.count++]);
  }
  getPrevArtist() {
    if (this.count == 0) {
      this.count = this.data.length - 1;
    }
    this.setCurrentSelectedArtist(this.data[this.count--]);
  }
  getArtistInfo() {
    return this.data;
  }
}
