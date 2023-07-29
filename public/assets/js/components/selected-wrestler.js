export default {
    props: ['selected'],
    data(props) {
        return {
        }
    },
    computed: {
        recordLink() {
            return 'http://sumodb.sumogames.de/Rikishi.aspx?r=' + this.selected.sumoDbId
        },
        imageLink() {
            return 'http://sumodb.sumogames.de/pics/' + this.selected.sumoDbId + '.jpg'
        }
    },
    template:
        `
<div class="card m-3" v-show="selected">
  <div class="row card-body">
      <div class="col-sm-6">
        <h1 class="card-title">{{ selected.shikonaEn }}</h1>
        <p class="card-text">{{ selected.heya }} stable</p>
        <a :href="recordLink" class="btn btn-primary">Full record</a>
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
