export default {
    props: ['selected'],
    data(props) {
        return {
        }
    },
    computed: {
        imageLink() {
            return 'http://sumodb.sumogames.de/pics/' + this.selected.sumoDbId + '.jpg'
        }
    },
    template:
        `
<div class="card">
  <div class="row card-body">
      <div class="col-sm-6">
        <h1 class="card-title">{{ selected.shikonaEn }}</h1>
        <p class="card-text">{{ selected.heya }}</p>
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
