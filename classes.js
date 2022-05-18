

class Rank {
  
    availTaxi = 3;
    passengerCount = 0;
    left = 0;
    income = 0
    constructor(rankName, price) {
        this.rankName = rankName
        this.price = price
    }

    que() {

        return this.passengerCount++

    }
    lessQue() {

        return this.passengerCount--
    }

    addDestination(area) {
        return this.ranks.push(area)
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
        this.income += this.price * 8
        return this.left++

    }

    // totalAmount(){
    //     return this.income
    // }

     totalIncome() {
        return this.income
    }
    
    decreasePassengers() {
        this.leave()
        return this.passengerCount - 3
    }

}
