const dialog = document.querySelector(".video-dialog");
const mount = document.querySelector(".video-mount");
const videoTitle = document.querySelector("#video-title");
const fallback = document.querySelector("#youtube-fallback");
const previewMessage = document.querySelector("#preview-message");
const previewLinkLabel = document.querySelector("#preview-link-label");
const closeButton = document.querySelector(".close-dialog");
let videoTrigger;

document.querySelectorAll("[data-video], [data-pdf]").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Keep native links for modified clicks, file previews, and older browsers.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
        location.protocol === "file:" || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    videoTrigger = link;
    const isPdf = link.hasAttribute("data-pdf");
    const title = isPdf ? "My resume" : link.dataset.title;
    videoTitle.textContent = title;
    dialog.dataset.content = isPdf ? "pdf" : "video";
    mount.classList.toggle("pdf-mount", isPdf);
    fallback.href = link.href;
    previewMessage.textContent = isPdf ? "Prefer to open it normally?" : "Playback unavailable?";
    previewLinkLabel.textContent = isPdf ? "Open the PDF in a new tab" : "Watch directly on YouTube";

    const player = document.createElement("iframe");
    player.title = title;
    player.src = isPdf
      ? `${link.href}#toolbar=0&navpanes=0`
      : `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1&rel=0`;
    if (!isPdf) {
      player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      player.allowFullscreen = true;
      player.referrerPolicy = "strict-origin-when-cross-origin";
    }
    mount.replaceChildren(player);
    dialog.showModal();
    document.body.classList.add("modal-open");
    closeButton.focus();
  });
});

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    dialog.close();
  }
});
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener("close", () => {
  mount.replaceChildren();
  mount.classList.remove("pdf-mount");
  delete dialog.dataset.content;
  document.body.classList.remove("modal-open");
  videoTrigger?.focus({ preventScroll: true });
});

const navLinks = [...document.querySelectorAll("nav a")];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href")));
let scrollPending = false;

function updateNavigation() {
  const headerHeight = document.querySelector(".site-header").offsetHeight;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= headerHeight + 80) current = section;
  }
  if (window.scrollY > 0 &&
      Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) {
    current = sections[sections.length - 1];
  }
  for (const link of navLinks) {
    if (link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  scrollPending = false;
}

window.addEventListener("scroll", () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
window.addEventListener("pageshow", updateNavigation);
document.querySelector("#year").textContent = new Date().getFullYear();
updateNavigation();
