// Lista packów i leveli
const packs = {
  "Top 5 Pack": [
    { name: "Level 1", author: "PlayerA" },
    { name: "Level 2", author: "PlayerB" },
    { name: "Level 3", author: "PlayerC" },
  ],
  "Top 10 Pack": [
    { name: "Level 4", author: "PlayerD" },
    { name: "Level 5", author: "PlayerE" },
    { name: "Level 6", author: "PlayerF" },
  ],
  "Toilet Trilogy Pack": [
    { name: "Flush Run", author: "ToiletGuy" },
    { name: "Drain Escape", author: "FlushMan" },
  ],
  "Spam Trilogy Pack": [
    { name: "Spam 1", author: "Spammy" },
    { name: "Spam 2", author: "SpamLord" },
  ],
  "Beginner Pack": [
    { name: "Simple Start", author: "Newbie" },
    { name: "First Steps", author: "Rookie" },
  ],
  "Intermediate Pack": [
    { name: "Mid Challenge", author: "PlayerG" },
    { name: "Not Easy", author: "PlayerH" },
  ],
  "Pro Pack": [
    { name: "Hardcore Level", author: "ProGamer" },
    { name: "Extreme Rush", author: "Legend" },
  ],
  "Scapes Pack": [
    { name: "Dreamscape", author: "BuilderA" },
    { name: "Nightscape", author: "BuilderB" },
  ],
  "Invisible Pack": [
    { name: "Blind Jump", author: "InvisibleMan" },
  ]
};

// Tworzenie dropdowna
const dropdown = document.createElement("select");
dropdown.className = "pack-select";
Object.keys(packs).forEach(packName => {
  const option = document.createElement("option");
  option.value = packName;
  option.textContent = packName;
  dropdown.appendChild(option);
});

// Miejsce na levele
const levelContainer = document.createElement("div");
levelContainer.className = "levels-container";

// Funkcja pokazująca levele z wybranego packa
function showLevels(packName) {
  const levels = packs[packName];
  levelContainer.innerHTML = "";
  levels.forEach(level => {
    const div = document.createElement("div");
    div.className = "level-card";
    div.innerHTML = `<strong>${level.name}</strong><br><small>by ${level.author}</small>`;
    levelContainer.appendChild(div);
  });
}

// Obsługa wyboru packa
dropdown.addEventListener("change", (e) => {
  showLevels(e.target.value);
});

// Dodaj elementy do strony
document.body.appendChild(dropdown);
document.body.appendChild(levelContainer);

// Pokaż pierwszy pack domyślnie
showLevels(Object.keys(packs)[0]);

// Style (prosty wygląd w stylu SMLL)
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: 'Poppins', sans-serif;
    background: #111;
    color: white;
    text-align: center;
    padding: 20px;
  }
  .pack-select {
    background: #1e2a78;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .levels-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .level-card {
    background: #222;
    padding: 15px;
    border-radius: 10px;
    width: 200px;
    transition: 0.2s;
  }
  .level-card:hover {
    background: #2d3bcf;
    transform: scale(1.05);
  }
`;
document.head.appendChild(style);

