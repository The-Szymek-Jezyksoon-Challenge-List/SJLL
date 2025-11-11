export default {
  name: "PacksPage",
  template: `
    <div class="packs-page">
      <h1 class="packs-title">Select a Pack</h1>

      <select v-model="selectedPack" class="pack-select">
        <option v-for="pack in Object.keys(packs)" :key="pack" :value="pack">
          {{ pack }}
        </option>
      </select>

      <div class="levels-container">
        <div v-for="level in packs[selectedPack]" :key="level.name" class="level-card">
          <strong>{{ level.name }}</strong><br />
          <small>by {{ level.author }}</small>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      selectedPack: "Top 5 Pack",
      packs: {
        "Top 5 Pack": [
          { name: "Level 1", author: "PlayerA" },
          { name: "Level 2", author: "PlayerB" },
          { name: "Level 3", author: "PlayerC" },
        ],
        "Toilet Trilogy Pack": [
          { name: "Flush Run", author: "ToiletGuy" },
          { name: "Drain Escape", author: "FlushMan" },
        ],
        "Pro Pack": [
          { name: "Hardcore Level", author: "ProGamer" },
          { name: "Extreme Rush", author: "Legend" },
        ],
      },
    };
  },
};

