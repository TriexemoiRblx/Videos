const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const postBtn = document.getElementById("post-btn");
const postSection = document.getElementById("post-section");
const postInput = document.getElementById("post-input");
const feed = document.getElementById("feed");

let currentUser = null;

loginBtn.addEventListener("click", async () => {
  const user = await loginWithGoogle();
  if (user) {
    currentUser = user;
    loginBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
    postSection.classList.remove("hidden");
    loadPosts();
  }
});

logoutBtn.addEventListener("click", () => {
  logout();
  currentUser = null;
  loginBtn.classList.remove("hidden");
  logoutBtn.classList.add("hidden");
  postSection.classList.add("hidden");
  feed.innerHTML = "";
});

postBtn.addEventListener("click", async () => {
  const text = postInput.value.trim();
  if (!text) return;
  await addPost(currentUser, text);
  postInput.value = "";
  loadPosts();
});

async function loadPosts() {
  const posts = await getPosts();
  feed.innerHTML = "";
  posts.forEach((p) => {
    const el = document.createElement("div");
    el.classList.add("post");
    el.innerHTML = `
      <b>${p.user}</b>
      <p>${p.content}</p>
      <button class="like-btn" data-id="${p.id}">❤️ ${p.likes}</button>
    `;
    feed.appendChild(el);
  });

  document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.getAttribute("data-id");
      const post = posts.find((x) => x.id == id);
      await likePost(id, post.likes + 1);
      loadPosts();
    });
  });
}
