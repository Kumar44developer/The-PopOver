const myBtn = document.getElementById("myBtn");
const myPopover = document.getElementById("myPopover");
const closeBtn = document.getElementById("closeBtn");

function openPopover() {
  myPopover.classList.add("active");
  myBtn.setAttribute("aria-expanded", "true");
}

function closePopover() {
  myPopover.classList.remove("active");
  myBtn.setAttribute("aria-expanded", "false");
}

function togglePopover() {
  if (myPopover.classList.contains("active")) {
    closePopover();
  } else {
    openPopover();
  }
}

if (myBtn) {
  myBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    togglePopover();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    closePopover();
    if (myBtn) myBtn.focus();
  });
}

document.addEventListener("click", function (event) {
  if (
    myPopover &&
    myPopover.classList.contains("active") &&
    !myPopover.contains(event.target) &&
    event.target !== myBtn
  ) {
    closePopover();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && myPopover && myPopover.classList.contains("active")) {
    closePopover();
    if (myBtn) myBtn.focus();
  }
});

function setPlacement(placement) {
  if (!myPopover) return;
  myPopover.classList.remove("popover-top", "popover-bottom");
  myPopover.classList.add(`popover-${placement}`);

  document.querySelectorAll(".placement-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.placement === placement);
  });
}
