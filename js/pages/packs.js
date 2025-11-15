export default {
  data() {
    return {
      packs: [
        {
          name: 'Starter Pack',
          levels: [
            { id: 'idk', name: 'Level 1' },
            { id: 'level2', name: 'Level 2' },
            { id: 'level3', name: 'Level 3' },
          ],
        },
        {
          name: 'Advanced Pack',
          levels: [
            { id: '127853046', name: 'fnaf lore' },
            { id: '127851970', name: 'the bill' },
            { id: '127982133', name: '18stka kacperka' },
          ],
        },
        {
          name: 'Challenge Pack',
          levels: [
            { id: '128155266', name: 'strzaleczka' },
            { id: '127898681', name: 'AOD Challenge' },
          ]
        }
      ],
      selectedPack: null,
    };
  },
  methods: {
    openPack(pack) {
      this.selectedPack = pack;
    },
    backToPacks() {
      this.selectedPack = null;
    },
  },
  template: `
    <section style="color:blue; text-align:center; padding:20px;">
      <h1 style="margin-bottom:20px;">🎮 Packs</h1>

      <div v-if="!selectedPack">
        <div v-for="pack in packs"
             :key="pack.name"
             @click="openPack(pack)"
             style="cursor:pointer; border:1px solid white; border-radius:12px; margin:10px auto; padding:15px; width:250px;">
          <h2>{{ pack.name }}</h2>
        </div>
      </div>

      <div v-else>
        <button @click="backToPacks"
                style="margin-bottom:15px; padding:5px 10px;">⬅ Wróć</button>

        <h2>{{ selectedPack.name }}</h2>

        <ul style="list-style:none; padding:0;">
          <li v-for="level in selectedPack.levels"
              :key="level.id"
              style="margin:6px 0;">
            <router-link
              :to="'/level/' + level.id"
              style="color:cyan;"
            >
              {{ level.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  `
};
