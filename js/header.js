document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");
    const navLinks = document.querySelectorAll(".nav-link");
  
    if (!hamburger || !mobileNav) {
      console.error("ハンバーガーメニューまたはナビゲーションが見つかりません。");
      return;
    }
  
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  
    document.addEventListener("click", (event) => {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
  
      if (!isClickInsideMenu && !isClickOnHamburger && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
      }
    });
});