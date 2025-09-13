//  copied from mzCode01
document.addEventListener("DOMContentLoaded", () => {
  const highlight = document.querySelector(".highlight");
  const items = document.querySelectorAll(".navigation li");

  const setHighlight = (item) => {
    highlight.style.width = item.offsetWidth + "px";
    highlight.style.left = item.offsetLeft + "px";
  };


  const activeItem = document.querySelector(".navigation li.active") || items[0];
  setHighlight(activeItem);

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      items.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      setHighlight(item);
    });
//  im traying to make the logo move here "note for"
    item.addEventListener("mouseenter", () => {
      if (!item.classList.contains("active")) {
        highlight.style.width = item.offsetWidth + "px";
        highlight.style.left = item.offsetLeft + "px";
      }
    });

    item.addEventListener("mouseleave", () => {
      const activeItem = document.querySelector(".navigation li.active");
      setHighlight(activeItem);
    });
  });

  window.addEventListener("resize", () => {
    const activeItem = document.querySelector(".navigation li.active");
    setHighlight(activeItem);
  });
});
