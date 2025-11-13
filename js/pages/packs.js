export default {
  data() {
    return {
      packs: [
        {
          name: 'Starter Pack',
          levels: ['18stka'],
        },
        {
          name: 'Advanced Pack',
          levels: ['aod'],
        },
        {
          name: 'Challenge Pack',
          levels: ['egzamin'],
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
    <section class="packs" style="color:white; text-align:center; padding:20px;">
      <h1 style="margin-bottom:20px;">🎮 Packs</h1>

      <div v-if="!selectedPack">
        <div v-for="pack in packs"
             :key="pack.name"
