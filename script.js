// Mobile nav toggle 
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  mobileNav.hidden = !isOpen;
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    mobileNav.hidden = true;
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Terminal typewriter (runs once) 
const terminalOutput = document.getElementById("terminal-output");

const script = [
  { text: "$ git push origin main", type: "cmd" },
  { text: "Deploy pipeline triggered...", type: "muted" },
  { text: "$ terraform apply", type: "cmd" },
  { text: "Apply complete! Resources: 6 added.", type: "ok" },
  { text: "$ kubectl rollout status deployment/app", type: "cmd" },
  { text: "deployment \"app\" successfully rolled out", type: "ok" },
];

function typeLine(lineIndex, charIndex, callback) {
  if (lineIndex >= script.length) {
    if (callback) callback();
    return;
  }

  const line = script[lineIndex];
  const el = document.createElement("div");
  if (line.type === "muted") el.className = "line-muted";
  if (line.type === "ok") el.className = "line-ok";
  terminalOutput.appendChild(el);

  function typeChar() {
    if (charIndex < line.text.length) {
      el.textContent += line.text[charIndex];
      charIndex++;
      setTimeout(typeChar, line.type === "cmd" ? 32 : 14);
    } else {
      setTimeout(() => typeLine(lineIndex + 1, 0, callback), 260);
    }
  }
  typeChar();
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  script.forEach((line) => {
    const el = document.createElement("div");
    if (line.type === "muted") el.className = "line-muted";
    if (line.type === "ok") el.className = "line-ok";
    el.textContent = line.text;
    terminalOutput.appendChild(el);
  });
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeLine(0, 0);
          obs.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(document.querySelector(".terminal"));
}

// Contact form (FormSubmit AJAX)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  status.className = "form-status";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });

    if (response.ok) {
      status.textContent = "Message sent. Thank you — I'll reply soon.";
      status.className = "form-status success";
      form.reset();
    } else {
      throw new Error("Request failed");
    }
  } catch (err) {
    status.textContent =
      "Something went wrong. Please email me directly at ewusii.priscilla@gmail.com.";
    status.className = "form-status error";
  }
});
