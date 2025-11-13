export default {
  data() {
    return {
      packs: [
        {
          name: 'Starter Pack',
          levels: ['Level 1', 'Level 2', 'Level 3'],
        },
        {
          name: 'Advanced Pack',
          levels: ['Level 4', 'Level 5', 'Level 6'],
        },
        {
          name: 'Challenge Pack',
          levels: ['Level 7', 'Level 8'],
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
    <div class="packs-page" style="color:white; text-align:center; padding:20px;">
      <h1 style="margin-bottom:20px;">🎮 Packs</h1>

      <div v-if="!selectedPack">
        <div v-for="pack in packs" :key="pack.name" class="pack-card"
             @click="openPack(pack)"
             style="cursor:pointer; border:1px solid white; border-radius:12px; margin:10px auto; padding:15px; width:250px;">
          <h2>{{ pack.name }}</h2>
        </div>
      </div>

      <div v-else>
        <button @click="backToPacks" style="margin-bottom:15px; padding:5px 10px;">⬅ Wróć</button>
        <h2>{{ selectedPack.name }}</h2>
        <ul style="list-style:none; padding:0;">

