document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.reviewForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const chorus = document.getElementById('chorus').checked;
        const quartet = document.getElementById('quartet').checked;
        const sing = document.getElementById('sing').checked;
        const support = document.getElementById('support').checked;
        const review = document.getElementById('review').value;

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            chorus: chorus,
            quartet: quartet,
            sing: sing,
            support: support,
            review: review
        };

        localStorage.setItem('formData', JSON.stringify(formData));
    });
});
