let scrollTopButton = document.querySelector(".scroll-to-top");

scrollTopButton.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

document.addEventListener("scroll", function () {
    if (window.scrollY < 500) {
      scrollTopButton.style.visibility = "hidden";
    } else {
      scrollTopButton.style.visibility = "visible";
    }
  });
