export default {
    props: ['id', 'shikonaEn', 'sumoDbId', 'heya', 'currentRank', 'wins', 'losses', 'winningPercentage', 'selectedwrestler'],
    data(props) {
        return {
        }
    },
    computed: {
        record() {
            if (isNaN(this.wins)) {
                return ''
            }

            return this.wins + '-' + this.losses
        },
        colour() {
            if (this.heya === this.$parent.selected.heya) {
                return 'secondary'
            }
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
        },
        isVisible() {
            // How to make dynamic state available to children? Can you do this through props as well?
            return this.selectedwrestler ? this.id !== this.selectedwrestler.id : true
        }
    },
    template:
        `
<div class="card col-sm-2 m-1" :class="borderClass" v-show="isVisible">
    <h5 class="card-header">{{ shikonaEn }}</h5>
    <div class="card-body" :class="textClass">
        <h3 class="card-title">{{ record }}</h3>
        <a href="#" @click="$emit('selected', id)" class="btn btn-outline-primary">Select</a>
    </div>
</div>
`
}
