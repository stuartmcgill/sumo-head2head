export default {
    props: ['selected'],
    data(props) {
        return {
        }
    },
    computed: {
        recordLink() {
            if (!this.selected) {
                return ''
            }

            return 'https://sumodb.sumogames.de/Rikishi.aspx?r=' + this.selected.sumoDbId
        },
        imageLink() {
            if (!this.selected) {
                return ''
            }

            return 'https://sumodb.sumogames.de/pics/' + this.selected.sumoDbId + '.jpg'
        }
    },
    template:
        `
<div class="card m-3" v-show="selected">
  <div class="row card-body">
      <div class="col-sm-7">      
        <h1 class="card-title">{{ selected.shikonaEn }}</h1>
        <p class="card-text">
            <div class="shikona-jp">{{ selected.shikonaJp }}</div>
            
            <dl class="row">
                <dt class="col-sm-4">Rank</dt>
                <dd class="col-sm-8">{{ selected.currentRank }}</dd>
                
                <dt class="col-sm-4">Stable</dt>
                <dd class="col-sm-8">{{ selected.heya }}</dd>
                
                <dt class="col-sm-4">Height</dt>
                <dd class="col-sm-8">{{ selected.height }}cm</dd>
                
                <dt class="col-sm-4">Weight</dt>
                <dd class="col-sm-8">{{ selected.weight }}kg</dd>
            </dl>
        </p>
        <a :href="recordLink" class="btn btn-primary">Full record</a>
      </div>
      <img
        :src="imageLink"
        class="selected-wrestler-image col-sm-5 img-responsive"
        :alt="'Photograph of ' + selected.shikonaEn"
      >
  </div>
</div>
`
}
