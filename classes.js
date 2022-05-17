

class Rank {
    belharPrice = 25.00
    nyangaPrice = 22.00
    samoraPrice = 21.00
    langaPrice = 14.00
    availTaxi = 3;
    passengerCount = 0;
    left = 0;
    constructor(rankName) {
        this.rankName = rankName
    }

    que() {
        // alert("hi")
        return this.passengerCount++

    }
    lessQue() {
        // this.passengerCount--;
        return this.passengerCount--
    }

    trip() {
        return this.availTaxi
    }
    message() {
        return "No taxis available"
    }

    leave() {
        this.passengerCount = this.passengerCount - 8
        this.availTaxi = this.availTaxi - 1
        return this.left++

    }
    langaFare() {
        return this.langaPrice
    }
    samoraFare() {
        return this.samoraPrice
    }
    nyangaFare() {
        return this.nyangaPrice
    }
    belharFare() {
        return this.belharPrice
    }
    total(langaPrice, samoraPrice, nyangaPrice, belhar) {
        if (langaPrice) {
            langaPrice * 8
        }
    }
    //decrease the number of taxis available
    decreasePassengers() {
        this.leave()
        return this.passengerCount - 3
    }

}
