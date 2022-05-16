//developer.mozilla.org/en-US/docs/Glossary/IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(async () => {
  const button = document.getElementById("btn-roll-dice");
  button?.addEventListener("click", (e) => {
    button.classList.add("is-loading");
  });
})();
