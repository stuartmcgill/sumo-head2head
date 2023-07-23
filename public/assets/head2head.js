export default {
    data() {
        return {
            shikonaEn: 'Daieisho',
            stable: 'Oitekaze',
            currentRank: 'Sekiwake',
            wins: 13,
            losses: 8,
        }
    },
    computed: {
        borderClass() {
            if (this.wins === 0 && this.losses === 0) {
                return 'border-secondary'
            }
            if (this.wins === this.losses) {
                return 'border-primary'
            }
            if (this.wins > this.losses) {
                return 'border-success'
            }

            return 'border-danger'
        }
    },
    template:
        `
<div class="card col-sm-2" :class="borderClass" >
    <div class="card-header">{{ shikonaEn }}</div>
    <div class="card-body">
        <h5 class="card-title">{{ wins }}-{{ losses }}</h5>
        <a href="#" class="btn btn-primary">{{ shikonaEn }} head-to-heads</a>
    </div>
</div>
`
}
