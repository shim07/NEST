document.addEventListener('DOMContentLoaded', function () {
    // List of hobbies and interests
    const hobbies = [
        "Gardening", "Knitting", "Reading", "Painting", "Cooking",
        "Embroidery", "Fishing", "Yoga", "Bird Watching", "Hiking",
        "Scrapbooking", "Photography", "Music", "Dancing", "Baking",
        "Calligraphy", "Quilting", "Board Games", "Puzzle Solving", 
        "Writing", "Volunteering", "Model Building", "Sewing", 
        "Woodworking", "Meditation", "Collecting Stamps", "Pottery", 
        "Crossword Puzzles"
    ];

    // Get the container where the hobbies will be displayed
    const interestsContainer = document.getElementById("interests-container");
    const saveInterestsButton = document.getElementById("save-interests");

    // Dynamically generate the list of hobbies as clickable divs
    hobbies.forEach((hobby) => {
        const hobbyElement = document.createElement("div");
        hobbyElement.className = "interest";
        hobbyElement.textContent = hobby;

        // Toggle selection on click (toggle 'selected' class)
        hobbyElement.addEventListener("click", () => {
            hobbyElement.classList.toggle("selected");
        });

        // Append each hobby to the container
        interestsContainer.appendChild(hobbyElement);
    });

    // Save the selected hobbies to localStorage when the user clicks 'Save'
   // Add event listener to the save button
saveInterestsButton.addEventListener("click", () => {
    const selectedHobbies = [];

    // Get all selected hobbies (those with 'selected' class)
    const selectedElements = document.querySelectorAll(".interest.selected");

    // Loop through selected elements and push the hobby text to the array
    selectedElements.forEach((element) => {
        selectedHobbies.push(element.textContent.trim());  // Ensure there are no extra spaces
    });

    // If no hobbies are selected, alert the user
    if (selectedHobbies.length === 0) {
        alert("Please select at least one interest to proceed.");
    } else {
        // Save the selected hobbies to localStorage
        localStorage.setItem("selectedHobbies", JSON.stringify(selectedHobbies));

        // Alert the user and redirect to login page
        alert("Your interests have been saved!");
        window.location.href = "login.html"; // Redirect to login page
    }
});

});
