export default {
    props: ['shikonaEn', 'sumoDbId', 'heya', 'currentRank', 'wins', 'losses'],
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
<div class="card col-sm-2" :class="borderClass">
    <h3 class="card-header">{{ shikonaEn }}</h3>
    <div class="card-body" :class="textClass">
        <h2 class="card-title">{{ wins }}-{{ losses }}</h2>
        <a href="#" class="btn btn-outline-primary">Select</a>
    </div>
</div>
`
}
