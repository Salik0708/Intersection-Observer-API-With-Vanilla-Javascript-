if (!!window.IntersectionObserver) {
  let video = document.querySelector("video");
  let isPaused = false; /* Flag for auto-paused video */

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log("entry--", entry);
        if (entry.intersectionRatio !== 1 && !video.paused) {
          video.pause();
          isPaused = true;
        } else if (isPaused) {
          video.play();
          isPaused = false;
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(video);
} else {
  document.querySelector("#warning").style.display = "block";
}
