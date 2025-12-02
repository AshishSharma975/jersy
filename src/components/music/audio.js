import { styles, applyStyles } from "./audioStyles";

function addBgMusic() {
  const bgMusic = new Audio("./music.mp3"); // FIXED PATH
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  let firstInteraction = false;

  const musicButton = document.createElement("button");
  musicButton.textContent = "🔊 Mute Music";
  applyStyles(musicButton, styles.musicButton);
  document.body.appendChild(musicButton);

  function enableMusicOnce() {
    if (!firstInteraction) {
      bgMusic.play().catch(err => console.log("play blocked:", err));
      firstInteraction = true;
      document.removeEventListener("click", enableMusicOnce);
    }
  }

  document.addEventListener("click", enableMusicOnce);

  let isMusicPlaying = true;

  musicButton.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isMusicPlaying) {
      bgMusic.pause();
      musicButton.textContent = "🔇 Play Music";
    } else {
      bgMusic.play();
      musicButton.textContent = "🔊 Mute Music";
    }

    isMusicPlaying = !isMusicPlaying;
  });
}

export { addBgMusic };
