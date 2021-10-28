const scrollBtn = document.querySelector(".scroll");
const nav1Btn = document.querySelector(".nav1");
const nav2Btn = document.querySelector(".nav2");
const nav3Btn = document.querySelector(".nav3");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");

scrollBtn.addEventListener("click", () => {
  section2.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "nearest",
  });
  document.querySelector(".NavMenu").classList.remove("open");
  document.querySelector(".iconNav").classList.remove("cross");
});

nav1Btn.addEventListener("click", () => {
  section2.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "nearest",
  });
  document.querySelector(".NavMenu").classList.remove("open");
  document.querySelector(".iconNav").classList.remove("cross");
});

nav2Btn.addEventListener("click", () => {
  section3.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "nearest",
  });
  document.querySelector(".NavMenu").classList.remove("open");
  document.querySelector(".iconNav").classList.remove("cross");
});

nav3Btn.addEventListener("click", () => {
  section4.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "nearest",
  });
  document.querySelector(".NavMenu").classList.remove("open");
  document.querySelector(".iconNav").classList.remove("cross");
});

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.from(
    ".logo",
    2,
    { transform: "translateX(-30px)", opacity: 0, ease: "power2.out" },
    0.3
  )
    .from(
      ".nav1",
      1,
      { transform: "translateY(-30px)", opacity: 0, ease: "power2.out" },
      0.3
    )
    .from(
      ".nav2",
      1,
      { transform: "translateY(-30px)", opacity: 0, ease: "power2.out" },
      0.5
    )
    .from(
      ".nav3",
      1,
      { transform: "translateY(-30px)", opacity: 0, ease: "power2.out" },
      0.7
    )
    .from(
      ".title",
      1,
      {
        transform: "translateY(-50%) translateX(-50px)",
        opacity: 0,
        ease: "power2.out",
      },
      0.7
    )
    .from(
      ".scroll",
      1,
      { transform: "translateY(-50px)", opacity: 0, ease: "bounce.out" },
      1
    );

  TL.play();
});

// scroll detection :

const threshold = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});

function OpenCloseNav() {
  document.querySelector(".NavMenu").classList.toggle("open");
  document.querySelector(".iconNav").classList.toggle("cross");
}
