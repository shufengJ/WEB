const container = document.getElementById('sign');
const tosignIn = document.getElementById('tosignIn');
const tosignUp = document.getElementById('tosignUp');

tosignIn.onclick = function() {
    container.classList.add("inverse");
}

tosignUp.onclick = function() {
    container.classList.remove('inverse');
}
