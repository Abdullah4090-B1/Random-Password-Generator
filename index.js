const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1 = document.querySelector(".fa-copy");
const alertContainerE1 = document.querySelector(".alert-container");

let timeout;

btnE1.addEventListener("click", () => {
    createPassword();
});

copyIconE1.addEventListener("click", () => {
    if (!inputE1.value) return;

    navigator.clipboard.writeText(inputE1.value);

    alertContainerE1.innerText = `Copied: ${inputE1.value}`;
    alertContainerE1.classList.add("active");

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        alertContainerE1.classList.remove("active");
    }, 1500);
});

function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[]";
    let password = "";

    for (let i = 0; i < 14; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    inputE1.value = password;
}
