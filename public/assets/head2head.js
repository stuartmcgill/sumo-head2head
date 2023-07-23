export default {
    props: ['shikonaEn', 'sumoDbId', 'stable', 'currentRank', 'wins', 'losses'],
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
            if (this.wins > this.losses) {
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
<div class="card col-sm-2" :class="textBgClass" >
    <div class="card-header">{{ shikonaEn }}</div>
    <div class="card-body">
        <h5 class="card-title">{{ wins }}-{{ losses }}</h5>
        <a href="#" class="btn btn-primary">Select</a>
    </div>
</div>
`
}
