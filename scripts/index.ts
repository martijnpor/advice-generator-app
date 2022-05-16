//developer.mozilla.org/en-US/docs/Glossary/IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(async () => {
  const button = document.getElementById("btn-roll-dice");
  button?.classList.add("is-loading");

  button?.addEventListener("click", (e) => {
    rollDice();
  });

  const rollDice = () => {
    button?.classList.add("is-loading");

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        var adviceId = document.getElementById("advice-id");
        if (adviceId != null) adviceId.textContent = data.slip.id;

        var adviceText = document.getElementById("advice-text");
        if (adviceText != null) adviceText.textContent = data.slip.advice;
      })
      .then(() => {
        button?.classList.remove("is-loading");
      });
  };

  rollDice();
})();
