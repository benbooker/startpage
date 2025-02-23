
document.addEventListener("DOMContentLoaded", () => {
  const dt = document.getElementById("datetime");
  const day = document.getElementById("day");
  const typedSpan = document.getElementById("typed");
  if (!dt || !day || !typedSpan) return;

  function updateDateTime() {
    const now = new Date();

    dt.textContent = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });

    day.textContent = now.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "short"
    });
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

  let typed = "";
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return; // Ignore shortcuts

    if (e.key.length === 1) {
      typed += e.key;
    } else if (e.key === "Backspace") {
      typed = typed.slice(0, -1);
    } else if (e.key === "Enter" && typed.trim()) {
      window.open("https://kagi.com/search?q=" + encodeURIComponent(typed.trim()), "_self");
      typed = "";
    }

    typedSpan.textContent = typed;
  });
});
