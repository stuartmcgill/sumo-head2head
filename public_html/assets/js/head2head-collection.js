export default class Head2HeadCollection {
    constructor(wrestlers) {
        this.head2heads = wrestlers;
    }
    sort() {
        function compareHead2Heads(a, b) {
            // Sort by winning percentage, then wins, then name
            if (a.winningPercentage < b.winningPercentage) {
                return 1
            }
            if (a.winningPercentage > b.winningPercentage) {
                return -1
            }

            if (a.winningPercentage !== b.winningPercentage) {
                // One (or both) must be null
                return a.winningPercentage === null ? 1 : -1
            }

            if (a.wins !== b.wins) {
                return a.wins < b.wins ? 1 : -1
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
