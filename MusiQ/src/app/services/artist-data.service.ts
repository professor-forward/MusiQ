import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArtistDataService {
  constructor() {}
  public currentSelectedArtist = {
    artistName: "Erik Conta",
    trackName: "All Time Low",
    albumCover: "../../assets/album-1.jpeg"
  };
  private data = [
    {
      artistName: "Erik Conta",
      trackName: "All Time Low",
      albumCover: "../../assets/album-1.jpeg"
    },
    {
      artistName: "Tiny Wayne",
      trackName: "I Can't Sing",
      albumCover: "../../assets/album-2.jpeg"
    },
    {
      artistName: "Big Daddy",
      trackName: "Small Son Noises",
      albumCover: "../../assets/album-3.jpeg"
    },
    {
      artistName: "Wanye Kest",
      trackName: "I Am Confused",
      albumCover: "../../assets/album-4.jpeg"
    },
    {
      artistName: "Albama Man",
      trackName: "Country Noises",
      albumCover: "../../../assets/album-5.jpeg"
    },
    {
      artistName: "Will Carpenter",
      trackName: "Weird Singing Noise",
      albumCover: "../../assets/album-6.jpeg"
    }
  ];
  setCurrentSelectedArtist(artist) {
    this.currentSelectedArtist = artist;
    console.log(this.currentSelectedArtist);
  }
  getCurrentArist() {
    this.currentSelectedArtist;
  }
  getArtistInfo() {
    return this.data;
  }
}
