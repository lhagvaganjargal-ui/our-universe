function welcomeMessage() {
    alert("Welcome to Our Universe❤️");     
}
function showSecret(){
    alert("You are my favorite person in this universe.❤️");
}
const photos = document.querySelectorAll(".memory-card img");
const preview = document.getElementById("photo-preview");
const previewImage = document.getElementById("preview-image");
const closeButton = document.getElementById("close-preview");
photos.forEach(function(photo) {
    photo.addEventListener("click", function(){ 
        preview.style.display = "flex";
        previewImage.src = photo.src;
    });
});
closeButton.addEventListener("click", function() {
    preview.style.display = "none";
});
preview.addEventListener("click", function(event) {
    if (event.target=== preview){
        preview.style.display="none";
    }
});
document.addEventListener("keydown", function(event){
    if (event.key==="escape"){
        preview.style.display="none";
    }
});
function openLetter() {
    const envelope = document.querySelector(".envelope");
    envelope.classList.add("open");
}

const reasons = [
    "I love the way you make me smile without even trying.",
    "I love your smile and how it brightens my day.",
    "I love the way you look at me.",
    "I love how comfortable I feel when I'm with you.",
    "I love your silly jokes, even the really bad ones.",
    "I love how you make ordinary days feel special.",
    "I love hearing your voice.",
    "I love how safe and loved you make me feel.",
    "I love all your little habits.",
    "I love the way you care about me.",
    "I love spending time with you, even when we're doing nothing.",
    "I love how you make me laugh when I'm sad.",
    "I love your hugs because they feel like home.",
    "I love learning new things about you.",
    "I love how you are unapologetically yourself.",
    "I love all the memories we've made together.",
    "I love that I can always be myself around you.",
    "I love choosing you, every single day.",
    "I love you simply because you're you."
];

let openedReasons = new Set();
let currentReason = 0;

// CREATE THE 19 CARDS

const reasonsGrid = document.getElementById("reasonsGrid");

reasons.forEach((reason, index) => {
    const card = document.createElement("button");

    card.className = "reason-card";
    card.innerHTML = `
        <span class="card-number">${index + 1}</span>
        <span class="card-heart">♥</span>
        <span class="card-label">A LITTLE REASON</span>
    `;

    card.onclick = () => openReason(index);

    reasonsGrid.appendChild(card);
});
function openReason(index) {
    currentReason = index;
    const overlay = document.getElementById("reasonOverlay");
    const number = document.getElementById("reasonNumber");
    const text = document.getElementById("reasonText");
    number.textContent = `Reason No. ${index + 1}`;
    text.textContent = reasons[index];
    overlay.classList.add("active");
    openedReasons.add(index);
    document.getElementById("openedCount").textContent =
        openedReasons.size;
    document.querySelectorAll(".reason-card")[index]
        .classList.add("visited");
}
function closeReason() {
    document.getElementById("reasonOverlay")
        .classList.remove("active");
}
function nextReason() {
    const next = (currentReason + 1) % reasons.length;
    openReason(next);
}
document.getElementById("reasonOverlay")
    .addEventListener("click", function(event) {
        if (event.target === this) {
            closeReason();
        }
    });
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeReason();
    }
});
