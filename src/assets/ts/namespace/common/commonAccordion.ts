export default function commonAccordion(): void {
  const trigger = document.querySelectorAll(".js-accordion-trigger");
  for (let i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", function() {
      const parent = this.parentNode;
      const body = parent.nextElementSibling;
      if (this.classList.contains("is-accordion-active")) {
        this.classList.remove("is-accordion-active");
        body.classList.remove("is-accordion-open");
      } else {
        this.classList.add("is-accordion-active");
        body.classList.add("is-accordion-open");
      }
    });
  }
}
