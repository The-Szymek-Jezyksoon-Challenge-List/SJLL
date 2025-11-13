export default {
  data() {
    return {
      packs: [
        {
          name: 'Starter Pack',
          levels: ['18STKA KACPERKA'],
        },
        {
          name: 'Advanced Pack',
          levels: ['AOD Challenge'],
        },
        {
          name: 'Challenge Pack',
          levels: ['Egzamin Osmoklasisty'],
        },
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
    <section class="packs" style="color:blue; text-align:center; padding:20px;">
      <h1 style="margin-bottom:20px;">🎮 Packs</h1>

      <div v-if="!selectedPack">
        <div v-for="pack in packs"
             :key="pack.name"
             @click="openPack(pack)"
             style="cursor:pointer; border:1px solid red; border-radius:12px; margin:10px auto; padding:15px; width:250px;">
          <h2>{{ pack.name }}</h2>
        </div>
      </div>

      <div v-else>
        <button @click="backToPacks"
                style="margin-bottom:15px; padding:5px 10px;">⬅ Wróć</button>
        <h2>{{ selectedPack.name }}</h2>
        <ul style="list-style:none; padding:0;">
          <li v-for="level in selectedPack.levels"
              :key="level"
              style="margin:6px 0;">
            {{ level }}
          </li>
        </ul>
      </div>
    </section>
  `
};

