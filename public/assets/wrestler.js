export default {
    data() {
        return {
            shikonaEn: "Takarafuji",
            stable: "Isegahama",
            sumoDbId: 11728
        }
    },
    computed: {
        imageLink() {
            return 'http://sumodb.sumogames.de/pics/' + this.sumoDbId + '.jpg'
        }
    },
    template:
        `
<div class="card">
  <div class="row card-body">
      <div class="col-sm-6">
        <h1 class="card-title">{{ shikonaEn }}</h1>
        <p class="card-text">{{ stable }}</p>
        <a href="#" class="btn btn-primary">Full record</a>
      </div>
      <img
        :src="imageLink"
        class="col-sm-6"
        alt="..."
      >
  </div>
</div>
`
}
