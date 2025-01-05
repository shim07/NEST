saveInterestsButton.addEventListener('click', () => {
    const selectedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
        .map(checkbox => checkbox.value);

    if (selectedInterests.length > 0) {
        localStorage.setItem('selectedInterests', JSON.stringify(selectedInterests));
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        alert('Please select at least one interest.');
    }
});
});