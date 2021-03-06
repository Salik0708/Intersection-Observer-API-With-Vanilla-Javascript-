const target = document.querySelector(".section:last-child");

const options = {
  threshold: 0.75,
};

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log("Log event and unobserve");
      observer.unobserve(target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(target);
