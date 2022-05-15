//developer.mozilla.org/en-US/docs/Glossary/IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(async () => {
  document.getElementById("btn-roll-dice")?.addEventListener("click", () => {
    alert("click");
  });
})();
