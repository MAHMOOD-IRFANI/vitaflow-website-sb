var menuToggle = document.getElementById("menuToggle");
var nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("open");

    document.body.style.overflow = nav.classList.contains("open")
      ? "hidden"
      : "";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      nav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}
// #######################
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

function rotation() {
  const element = document.getElementById("rotation");

  if (element.style.transform === "rotate(-45deg)") {
    element.style.transform = "rotate(0deg)";
  } else {
    element.style.transform = "rotate(-45deg)";
  }
}

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active2");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  },
);

reveals.forEach((el) => {
  observer.observe(el);
});

function checking_consulatation_form() {
  // checking the virtual consultation form
  var name = document.getElementById("name").value;
  var doctor = document.getElementById("doctor").value;
  var location = document.getElementById("location").value;
  var submit_btn_form = document.getElementById("form_btn_submit");

  if (!name == "" && !doctor == "" && !location == "") {
    submit_btn_form.style.backgroundColor = "#4586FF";
  } else {
    submit_btn_form.style.backgroundColor = "#9DC0FF";
  }
}

const statsSection = document.querySelector(".stats");
const counters = document.querySelectorAll(".stat h2");

let started = false;

function startCounting() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.textContent.replace(/[0-9]/g, "");

    let count = 0;
    const speed = target / 50;

    const update = () => {
      count += speed;

      if (count < target) {
        counter.textContent = Math.floor(count) + suffix;
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + suffix;
      }
    };

    update();
  });
}

const observerf = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        startCounting();
        started = true;
      }
    });
  },
  {
    threshold: 0.3,
  },
);

observerf.observe(statsSection);
