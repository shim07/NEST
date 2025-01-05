document.addEventListener("DOMContentLoaded", () => {
    const joinedCommunities = ["Yoga Group", "Art Club"];
    const container = document.getElementById("joined-communities");

    joinedCommunities.forEach((community) => {
        const div = document.createElement("div");
        div.textContent = community;
        container.appendChild(div);
    });
});
