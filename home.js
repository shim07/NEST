document.addEventListener("DOMContentLoaded", () => {
    // Simulate logged-in user (replace this with real user authentication)
    const currentUser = localStorage.getItem("currentUser") || "guest";

    // Retrieve user-specific joined communities
    const getUserJoinedCommunities = (user) => {
        const userCommunities = JSON.parse(localStorage.getItem("userCommunities")) || {};
        return userCommunities[user] || [];
    };

    // Save user-specific joined communities
    const saveUserJoinedCommunities = (user, communities) => {
        const userCommunities = JSON.parse(localStorage.getItem("userCommunities")) || {};
        userCommunities[user] = communities;
        localStorage.setItem("userCommunities", JSON.stringify(userCommunities));
    };

    // User's joined communities
    let joinedCommunities = getUserJoinedCommunities(currentUser);

    // Simulate user-selected hobbies from localStorage
    const selectedHobbies = JSON.parse(localStorage.getItem("selectedHobbies")) || [];

    // List of all available communities
    const allCommunities = [
        "Gardening Club", "Knitting Group", "Book Lovers",
        "Painting Enthusiasts", "Cooking Adventures", "Embroidery Circle",
        "Fishing Buddies", "Yoga Practitioners", "Bird Watchers",
        "Hiking Explorers", "Scrapbooking Crew", "Photography Fans",
        "Music Makers", "Dance Enthusiasts", "Baking Community",
        "Calligraphy Artists", "Quilting Hobbyists", "Board Game Players",
        "Puzzle Solvers", "Writing Workshop", "Volunteering Spirit",
        "Model Builders", "Sewing Enthusiasts", "Woodworking Experts",
        "Meditation Group", "Stamp Collectors", "Pottery Makers",
        "Crossword Puzzle Fans"
    ];

    // DOM Elements
    const suggestedContainer = document.getElementById("suggested-communities");
    const otherContainer = document.getElementById("other-communities");
    const searchBar = document.getElementById("search-bar");

    // Function to render a community item
    const renderCommunity = (name, container) => {
        const communityItem = document.createElement("div");
        communityItem.className = "community-item";

        const communityName = document.createElement("span");
        communityName.textContent = name;

        const joinButton = document.createElement("button");
        joinButton.textContent = joinedCommunities.includes(name) ? "Joined" : "Join";
        joinButton.disabled = joinedCommunities.includes(name);

        joinButton.addEventListener("click", () => {
            if (!joinedCommunities.includes(name)) {
                joinedCommunities.push(name); // Add to joined communities
                saveUserJoinedCommunities(currentUser, joinedCommunities); // Save to localStorage
                alert(`You have joined the "${name}" community!`);
                joinButton.textContent = "Joined";
                joinButton.disabled = true; // Disable the button
            }
        });

        communityItem.appendChild(communityName);
        communityItem.appendChild(joinButton);
        container.appendChild(communityItem);
    };

    // Suggested Communities: Filter based on selected hobbies
    const suggestedCommunities = allCommunities.filter((community) =>
        selectedHobbies.some((hobby) =>
            community.toLowerCase().includes(hobby.toLowerCase())
        )
    );

    // Other Communities: Exclude suggested communities
    const otherCommunities = allCommunities.filter(
        (community) => !suggestedCommunities.includes(community)
    );

    // Render Suggested Communities
    if (suggestedCommunities.length > 0) {
        suggestedCommunities.forEach((community) =>
            renderCommunity(community, suggestedContainer)
        );
    } else {
        suggestedContainer.innerHTML = "<p>No suggestions available based on your interests.</p>";
    }

    // Render Other Communities
    otherCommunities.forEach((community) =>
        renderCommunity(community, otherContainer)
    );

    // Search bar: Filter other communities dynamically
    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        otherContainer.innerHTML = ""; // Clear existing results
        otherCommunities
            .filter((community) => community.toLowerCase().includes(query))
            .forEach((community) => renderCommunity(community, otherContainer));
    });
});
