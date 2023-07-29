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

            return 'http://sumodb.sumogames.de/Rikishi.aspx?r=' + this.selected.sumoDbId
        },
        imageLink() {
            if (!this.selected) {
                return ''
            }

            return 'http://sumodb.sumogames.de/pics/' + this.selected.sumoDbId + '.jpg'
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
                <dt class="col-sm-3">Rank</dt>
                <dd class="col-sm-9">{{ selected.currentRank }}</dd>
                
                <dt class="col-sm-3">Stable</dt>
                <dd class="col-sm-9">{{ selected.heya }}</dd>
                
                <dt class="col-sm-3">Height</dt>
                <dd class="col-sm-9">{{ selected.height }}cm</dd>
                
                <dt class="col-sm-3">Weight</dt>
                <dd class="col-sm-9">{{ selected.weight }}kg</dd>
            </dl>
        </p>
        <a :href="recordLink" class="btn btn-primary">Full record</a>
      </div>
      <img
        :src="imageLink"
        class="col-sm-5"
        alt="..."
      >
  </div>
</div>
`
}
