function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Toggle Menu
function toggleMenu() {
    let navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

// Live Chat
function openChat() {
    document.getElementById("chatbox").style.display = "block";
}

function closeChat() {
    document.getElementById("chatbox").style.display = "none";
}
