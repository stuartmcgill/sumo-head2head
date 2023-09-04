export default {
    props: ['head2head', 'selectedWrestler'],
    data(props) {
        return {
            renderPopover: true
        }
    },
    mounted() {
        this.enablePopovers()
    },
    watch: {
        async selectedWrestler (newVal, oldVal) {
            // Force popovers to re-render. If we don't do this then the popovers will stay linked
            // to the wrestler who was originally in that position. So if we re-order the cards then
            // the popovers will all be out of sync.
            this.forceRender()
        }
    },
    methods: {
        enablePopovers() {
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })
        },
        async forceRender() {
            this.renderPopover = false;
            await this.$nextTick();

            this.renderPopover = true;
            await this.$nextTick();

            this.enablePopovers()
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
        },
        detailsText() {
            let text = '<div>' + this.head2head.shikonaJp + '</div>'
                + '<div>Rank: ' + this.head2head.currentRank + '</div>'
                + '<div>Stable: ' + this.head2head.heya + '</div>'
                + '<div>Height: ' + this.head2head.height + 'cm</div>'
                + '<div>Weight: ' + this.head2head.weight + 'kg</div>'

            if (this.selectedWrestler && (this.head2head.wins + this.head2head.losses > 0)) {
                text += '<div><a target="_blank" href="https://sumodb.sumogames.de/Rikishi_opp.aspx?r='
                    + this.selectedWrestler.sumoDbId + '#' + this.head2head.sumoDbId + '">Head-to-head details</a></div>'
            }

            return text
        }
    },
    template:
        `
<div class="card col-sm-2 m-1" :class="borderClass" v-show="isVisible">
    <h5 class="card-header">{{ head2head.shikonaEn }}</h5>
    <div class="card-body" :class="textClass">
        <h3 class="card-title">{{ record }}<div class="winning-percentage">{{ percentage }}</div></h3>
        <a href="#" @click="$emit('selected', head2head.id)" class="btn btn-outline-primary">Select</a>
        <a
            v-if="renderPopover"
            tabindex="0"
            class="btn btn-outline-secondary m-1"
            role="button"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
			data-bs-delay='{ "show\": 0, \"hide\": 200 }'
            data-bs-placement="right"
            data-bs-html="true"
            :title="head2head.shikonaEn"
            :data-bs-content="detailsText">
                Details
        </a>
    </div>
</div>
`
}
