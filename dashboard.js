/* ──────────────────────────────────────────────
   dashboard.js  |  DigiMitra front-end helpers
   ────────────────────────────────────────────── */
(() => {
  "use strict";

  /* ╭───────────────────────────╮
     │ ⏰  Live Date-Time Clock  │
     ╰───────────────────────────╯ */
  const dateNode = document.getElementById("datetime");

  function updateTime() {
    const now = new Date();
    dateNode.textContent = now.toLocaleString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  updateTime();                 // initial paint
  setInterval(updateTime, 1000); // tick every second

  /* ╭─────────────────────────────────────────╮
     │ 🔍  Live Search Filter for Notice list │
     ╰─────────────────────────────────────────╯ */
  const searchInput  = document.getElementById("searchInput");
  const noticeList   = document.getElementById("noticeList");
  const noticeItems  = [...noticeList.querySelectorAll("li")];

  // Create a reusable “no results” <li>
  const noResultLI = document.createElement("li");
  noResultLI.id           = "no-result";
  noResultLI.style.fontStyle = "italic";
  noResultLI.style.color  = "#777";
  noResultLI.style.display = "none"; // hidden by default
  noticeList.appendChild(noResultLI);

  function filterNotices() {
    const query = searchInput.value.trim().toLowerCase();
    let matches  = 0;

    noticeItems.forEach((item) => {
      const isMatch = item.textContent.toLowerCase().includes(query);
      item.style.display = isMatch ? "" : "none";
      if (isMatch) matches++;
    });

    // Toggle “no results” message
    noResultLI.textContent = matches ? "" : "No matching notices found.";
    noResultLI.style.display = matches ? "none" : "";
  }

  /— event listeners —/
  searchInput.addEventListener("input",  filterNotices);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {          // Esc clears the search box
      searchInput.value = "";
      filterNotices();
    }
  });
})();