document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMessage.textContent = "✅ Thank you! Your message has been sent.";
      form.reset();
    });
  });
  
  // Alumni Directory Search
const searchInput = document.getElementById("searchInput");
const alumniList = document.getElementById("alumniList");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();
    let cards = alumniList.getElementsByClassName("alumni-card");

    Array.from(cards).forEach(card => {
      let text = card.textContent.toLowerCase();
      card.style.display = text.includes(filter) ? "" : "none";
    });
  });
}
const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const postsContainer = document.getElementById("postsContainer");

if (postBtn) {
  postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    if (text === "") return;

    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
      <h3>You</h3>
      <p>${text}</p>
      <div class="post-actions">
        <button class="like-btn">👍 Like (<span class="like-count">0</span>)</button>
        <button class="comment-btn">💬 Comment</button>
        <button class="share-btn">🔗 Share</button>
      </div>
      <div class="comments"></div>
    `;
    postsContainer.prepend(post);
    postInput.value = "";
  });
}

// Handle like, comment dynamically
if (postsContainer) {
  postsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      let count = e.target.querySelector(".like-count");
      count.textContent = parseInt(count.textContent) + 1;
    }

    if (e.target.classList.contains("comment-btn")) {
      let comment = prompt("Enter your comment:");
      if (comment) {
        let commentsDiv = e.target.closest(".post").querySelector(".comments");
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = `💬 ${comment}`;
        commentsDiv.appendChild(newComment);
      }
    }

    if (e.target.classList.contains("share-btn")) {
      alert("🔗 Post link copied!");
    }
  });
}
// Achievements Modal
const addAchievementBtn = document.getElementById("addAchievementBtn");
const achievementModal = document.getElementById("achievementModal");
const closeModal = document.querySelector(".close");
const achievementForm = document.getElementById("achievementForm");
const achievementList = document.getElementById("achievementList");

if (addAchievementBtn) {
  addAchievementBtn.addEventListener("click", () => {
    achievementModal.style.display = "flex";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    achievementModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === achievementModal) {
    achievementModal.style.display = "none";
  }
});

if (achievementForm) {
  achievementForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const text = document.getElementById("achievementText").value.trim();

    if (name && text) {
      const newAch = document.createElement("div");
      newAch.classList.add("achievement");
      newAch.innerHTML = `<h3>${name}</h3><p>✨ ${text}</p>`;
      achievementList.prepend(newAch);
      achievementForm.reset();
      achievementModal.style.display = "none";
    }
  });
}
// Profile Form
const profileForm = document.getElementById("profileForm");

if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("previewName").textContent = document.getElementById("profileName").value;
    document.getElementById("previewEmail").textContent = "Email: " + document.getElementById("profileEmail").value;
    document.getElementById("previewBatch").textContent = "Batch: " + document.getElementById("profileBatch").value;
    document.getElementById("previewProfession").textContent = "Profession: " + document.getElementById("profileProfession").value;
    document.getElementById("previewBio").textContent = document.getElementById("profileBio").value;

    const picInput = document.getElementById("profilePic");
    if (picInput.files && picInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("previewPic").src = e.target.result;
      };
      reader.readAsDataURL(picInput.files[0]);
    }
    alert("✅ Profile updated successfully!");
  });
}
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for navbar height
        behavior: "smooth"
      });
    }
  });
});
// Change navbar style on scroll
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // scrolling down → hide navbar
    navbar.style.top = "-80px"; // adjust based on navbar height
  } else {
    // scrolling up → show navbar
    navbar.style.top = "0";
  }
  
  lastScrollTop = scrollTop;
});
