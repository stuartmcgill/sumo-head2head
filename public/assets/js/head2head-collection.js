export default class Head2HeadCollection {
    constructor(wrestlers) {
        this.head2heads = wrestlers;
    }
    sort() {
        function compareHead2Heads(a, b) {
            if (a.winningPercentage < b.winningPercentage) {
                return 1
            }
            if (a.winningPercentage > b.winningPercentage) {
                return -1
            }

            if (a.winningPercentage !== b.winningPercentage) {
                return a.winningPercentage === null ? 1 : -1
            }

            return a.shikonaEn > b.shikonaEn ? 1 : -1
        }

        this.head2heads.sort(compareHead2Heads)
    }
    refreshHead2HeadData(head2heads) {
        this.head2heads.forEach((wrestler, index) => {
            const relevantMatchup = head2heads.matchups.filter(
                (matchup) => matchup.opponentId === wrestler.id
            )[0]

            this.head2heads[index].wins = relevantMatchup.rikishiWins
            this.head2heads[index].losses = relevantMatchup.opponentWins
            this.head2heads[index].winningPercentage = relevantMatchup.winningPercentage
        });
    }
    find(id) {
        return this.head2heads.filter((wrestler) => wrestler.id === id)[0]
    }
}
