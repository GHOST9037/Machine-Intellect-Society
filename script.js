document.addEventListener("DOMContentLoaded", function() {
    const eventList = document.getElementById("event-list");

    fetch("./events.json")  // Ensure correct path
        .then(response => {
            console.log("Fetching events.json...");  // Debugging log
            if (!response.ok) {
                throw new Error("HTTP error! Status: " + response.status);
            }
            return response.json();
        })
        .then(events => {
            console.log("Events data received:", events);  // Debugging log
            if (events.length === 0) {
                eventList.innerHTML = "<p>No upcoming events.</p>";
            } else {
                events.forEach(event => {
                    let listItem = document.createElement("li");
                    listItem.textContent = `${event.name} - ${event.date}`;
                    listItem.classList.add("event-item");
                    eventList.appendChild(listItem);
                });
            }
        })
        .catch(error => {
            console.error("Error loading events:", error);
            eventList.innerHTML = "<p>Failed to load events. Please try again later.</p>";
        });
});

function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}
