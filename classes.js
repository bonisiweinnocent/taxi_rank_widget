

class Rank {

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
    message(){
        return "No taxis available"
    }

    leave() {
        this.passengerCount = this.passengerCount - 3
        this.availTaxi = this.availTaxi - 1
        return this.left++

    }


    //decrease the number of taxis available
    decreasePassengers() {
        this.leave()
        return this.passengerCount - 3
    }

}
