document.addEventListener("DOMContentLoaded", function () {
   // Replace the [your element ID] with your actiual element ID on your website.
   const element = document.getElementById("[your element ID]");
   let lastScrollTop = 0;

   function toggleSocials() {

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // You can adjust the value "175" based on your preferences. 
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
