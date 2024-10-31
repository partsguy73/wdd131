let formsSended = window.localStorage.getItem("forms") || 0


const submit = document.getElementById('submitButton')
submit.addEventListener('click', (e) => {
    formsSended++;
    window.localStorage.setItem("forms", formsSended);
});
