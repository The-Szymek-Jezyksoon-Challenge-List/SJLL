export default function PacksPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="packs-container">
      <div class="dropdown">
        <button class="dropdown-btn">All Packs ▾</button>
        <div class="dropdown-content" id="packs-menu"></div>
      </div>

      <div id="levels-list"></div>
    </div>
  `;

  // Lista packów
  const packs = [
    "All Packs",
    "Top 5 Pack",
    "Top 10 Pack",
    "Toilet Trilogy Pack",
    "Spam Trilogy Pack",
    "Beginner Pack",
    "Intermediate Pack",
    "Pro Pack",
    "Scapes Pack",
    "Invisible Pack"
  ];

  // Przykładowe levele (możesz je zmienić)
  const levels = [
    { name: "18STKA KACPERKA", pack: "Top 5 Pack" },
    { name: "Egzamin Osmoklasisty", pack: "Top 5 Pack" },
    { name: "AOD Challenge", pack: "Top 5 Pack" },
    { name: "Unnamed", pack: "Top 5 Pack" },
    { name: "Expscape", pack: "Top 5 Pack" },
    { name: "Mini Challenge", pack: "Beginner Pack" },
    { name: "Spam Hell", pack: "Spam Trilogy Pack" },
    { name: "Invisible Insanity", pack: "Invisible Pack" },
  ];

  const menu = document.getElementById("packs-menu");
  const levelsList = document.getElementById("levels-list");

  // 🔹 Tworzenie menu packów
  packs.forEach(pack => {
    const a = document.createElement("a");
    a.textContent = pack;
    a.href = "#";
    a.addEventListener("click", e => {
      e.preventDefault();
      showLevels(pack);
    });
    menu.appendChild(a);
  });

  // 🔹 Funkcja wyświetlająca levele
  function showLevels(selectedPack) {
    levelsList.innerHTML = ""; // wyczyść poprzednią listę

    const filtered = selectedPack === "All Packs"
      ? levels
      : levels.filter(lvl => lvl.pack === selectedPack);

    if (filtered.length === 0) {
      levelsList.innerHTML = `<p>Brak leveli w ${selectedPack}</p>`;
      return;
    }

    filtered.forEach((lvl, i) => {
      const div = document.createElement("div");
      div.className = "level-item";
      div.innerHTML = `<span class="rank">#${i + 1}</span> ${lvl.name}`;
      levelsList.appendChild(div);
    });
  }

  // 🔹 Pokaż wszystko na start
  showLevels("All Packs");
}

