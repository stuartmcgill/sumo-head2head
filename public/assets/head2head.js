export default {
    props: ['id', 'shikonaEn', 'sumoDbId', 'heya', 'currentRank', 'wins', 'losses', 'winningPercentage'],
    data(props) {
        return {
        }
    },
    computed: {
        colour() {
            if (this.wins === 0 && this.losses === 0) {
                return 'info'
            }
            if (this.wins === this.losses) {
                return 'primary'
            }
            if (this.winningPercentage > 50) {
                return 'success'
            }

            return 'danger'
        },
        borderClass() {
            return 'border-' + this.colour;
        },
        textClass() {
            return 'text-' + this.colour;
        }
        ,
        textBgClass() {
            return 'text-bg-' + this.colour;
        }
    },
    template:
        `
<div class="card col-sm-2" :class="borderClass">
    <h5 class="card-header">{{ shikonaEn }}</h5>
    <div class="card-body" :class="textClass">
        <h3 class="card-title">{{ wins }}-{{ losses }}</h3>
        <a href="#" @click="$emit('selected', id)" class="btn btn-outline-primary">Select</a>
    </div>
</div>
`
}
