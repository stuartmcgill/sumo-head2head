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
}
