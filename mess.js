document.addEventListener("DOMContentLoaded", () => {
    // Simulate logged-in user (replace this with real user authentication)
    const currentUser = localStorage.getItem("currentUser") || "guest";

    // Retrieve user-specific joined communities
    const getUserJoinedCommunities = (user) => {
        const userCommunities = JSON.parse(localStorage.getItem("userCommunities")) || {};
        return userCommunities[user] || [];
    };

    // User's joined communities
    const userList = getUserJoinedCommunities(currentUser);

    // DOM Elements
    const userListElement = document.getElementById("userList");
    const chatUserName = document.getElementById("chatUserName");
    const chatWindow = document.getElementById("chatWindow");
    const messageInput = document.getElementById("messageInput");
    const sendMessage = document.getElementById("sendMessage");

    let activeUser = null;

    // Populate user list from joined communities
    userList.forEach((user) => {
        const userElement = document.createElement("li");
        userElement.textContent = user;

        // Add click event to select the active user
        userElement.addEventListener("click", () => {
            // Clear active class from all users
            document.querySelectorAll(".user-list li").forEach((li) => {
                li.classList.remove("active");
            });

            // Set active class for the selected user
            userElement.classList.add("active");

            // Update chat header and clear chat window
            chatUserName.textContent = user;
            chatWindow.innerHTML = ""; // Clear the chat window
            activeUser = user;
        });

        // Append user to the user list
        userListElement.appendChild(userElement);
    });

    // Send message
    sendMessage.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message && activeUser) {
            // Add sent message
            const sentMessage = document.createElement("div");
            sentMessage.className = "message sent";
            sentMessage.innerHTML = `<div class="content">${message}</div>`;
            chatWindow.appendChild(sentMessage);

            // Clear the input and scroll to the bottom
            messageInput.value = "";
            chatWindow.scrollTop = chatWindow.scrollHeight;

            // Simulate a response (optional)
            /*
            setTimeout(() => {
                const receivedMessage = document.createElement("div");
                receivedMessage.className = "message received";
                receivedMessage.innerHTML = `<div class="content">Reply from ${activeUser}</div>`;
                chatWindow.appendChild(receivedMessage);

                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1000);
            */
        }
    });
});
