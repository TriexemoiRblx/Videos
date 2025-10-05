document.addEventListener("click", (e) => {
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    document.body.appendChild(spark);
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 15;
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    setTimeout(() => spark.remove(), 400);
  }
});

const style = document.createElement("style");
style.innerHTML = `
.spark {
  position: fixed;
  width: 10px; height: 10px;
  background: #fff; border-radius: 50%;
  pointer-events: none;
  animation: spark-move 0.4s linear;
}
@keyframes spark-move {
  to { transform: translate(var(--x), var(--y)); opacity: 0; }
}`;
document.head.appendChild(style);
