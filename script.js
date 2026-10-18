const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "you are a baddie",
    "the snack&nap combo cures things nothing else can",
    "don't give a man the benefit of doubt, doubt the benefit of a man",
    "Aut viam inveniam aut faciam",
    "never too early/late to bake gingerbread (send me some tho)",
    "your smile is addicting",
];
button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});