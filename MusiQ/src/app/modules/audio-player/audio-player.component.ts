import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-audio-player",
  templateUrl: "./audio-player.component.html",
  // styleUrls: ['./audio-player.component.css']
  styleUrls: ["../../app.component.css"]
})
export class AudioPlayerComponent implements OnInit {
  audio = new Audio("../../../assets/audio-1.mp3");

  iconChange = "fa-play";
  constructor() {}
  ngOnInit(): void {}

  play(event) {
    if (this.audio.paused) {
      this.audio.play();
      this.iconChange = "fa-pause";
    } else {
      this.audio.pause();
      this.iconChange = "fa-play";
    }
  }
  next(event) {
    console.log(event);
  }
  previous(event) {
    console.log(event.target);
  }
}

// window.onload = () => {
// var audio = document.getElementById("audio-test");
// var card = document.getElementsByClassName("player-card");
// var play = document.getElementById("play");
// var closebtnlogin = document.getElementById("closebtnlogin");
// var closebtnreg = document.getElementById("closebtnreg");
// var modal = document.getElementById("modal-login");
// var modalregister = document.getElementById("modal-register");
// var loginbtn = document.getElementById("loginbtn");
// var registbtn = document.getElementById("registerbtn");

// play.addEventListener("click", function() {

// });
// closebtnlogin.addEventListener("click", () => {
//   modal.style.display = "none";
// });
// closebtnreg.addEventListener("click", () => {
//   modalregister.style.display = "none";
// });
// loginbtn.addEventListener("click", () => {
//   modal.style.display = "block";
// });
// registbtn.addEventListener("click", () => {
//   modalregister.style.display = "block";
// });

// Array.from(card).forEach(element => {
//   element.addEventListener("click", () => {
//     alert("Now Playing " + document.getElementById("artist").innerText);

//     document.getElementById("artist").innerText =
//       element.lastElementChild.innerHTML;
//     document.getElementById("title").innerText =
//       element.lastElementChild.previousElementSibling.innerHTML;

//     var image = document.getElementsByClassName("album-art");
//     image[0].style.backgroundImage = `url(" ${element.firstElementChild.getAttribute(
//       "src"
//     )}")`;
//   });
// });
