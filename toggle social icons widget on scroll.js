document.addEventListener("DOMContentLoaded", function () {
   const element = document.getElementById("ci-socials-8");
   let lastScrollTop = 0;

   function toggleSocials() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
         element.classList.remove("visible");
         return;
      }

      if (scrollTop > lastScrollTop && scrollTop > 175) {
         // Scrolling down
         element.classList.add("visible");
      } else {
         // Scrolling up
         element.classList.remove("visible");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
   }

   window.addEventListener("scroll", toggleSocials);
   window.addEventListener("resize", toggleSocials);
});
