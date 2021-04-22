if (!!window.IntersectionObserver) {
  let n = 0; /* total no. of articles viewed */
  let count = document.querySelector("#count");

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Example #1
        if (entry.isIntersecting) {
          count.textContent = `articles fully viewed - ${++n}`;
          observer.unobserve(entry.target);
        }

        // Example #2
        // if (entry.isIntersecting) {
        //   count.textContent = `articles fully viewed`;
        //   count.style.display = "block";
        // } else {
        //   count.style.display = "none";
        // }
      });
    },
    { threshold: 1 }
  );

  document.querySelectorAll("article > p:last-child").forEach((p) => {
    observer.observe(p);
  });
} else {
  document.querySelector("#warning").style.display = "block";
}
