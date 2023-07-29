export default {
    props: ['head2head', 'selectedWrestler'],
    data(props) {
        return {
        }
    },
    computed: {
        populated() {
            return !isNaN(this.head2head.wins)
        },
        record() {
            if (!this.populated) {
                return ''
            }

            return this.head2head.wins + '-' + this.head2head.losses
        },
        percentage() {
            if (!this.populated) {
                return ''
            }

            if (this.head2head.winningPercentage === null) {
                return ''
            }

            return this.head2head.winningPercentage + '%'
        },
        colour() {
            if (this.head2head.heya === this.selectedWrestler.heya) {
                return 'secondary'
            }
            if (this.head2head.wins === 0 && this.head2head.losses === 0) {
                return 'info'
            }
            if (this.head2head.wins === this.head2head.losses) {
                return 'primary'
            }
            if (this.head2head.winningPercentage > 50) {
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
            if (!this.selectedWrestler) {
                return true
            }

            return this.head2head.id !== this.selectedWrestler.id
        }
    },
    template:
        `
<div class="card col-sm-2 m-1" :class="borderClass" v-show="isVisible">
    <h5 class="card-header">{{ head2head.shikonaEn }}</h5>
    <div class="card-body" :class="textClass">
        <h3 class="card-title">{{ record }}<div class="winning-percentage">{{ percentage }}</div></h3>
        <a href="#" @click="$emit('selected', head2head.id)" class="btn btn-outline-primary">Select</a>
    </div>
</div>
`
}
