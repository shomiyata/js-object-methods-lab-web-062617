// code solution here
class President {
    constructor (name, politicalParty, yearsInOffice, homeState){
        this.name = name
        this.politicalParty = politicalParty
        this.yearsInOffice = yearsInOffice
        this.homeState = homeState
    }

    veto() {
        return "NO!"
    }

    passBill() {
        return "You can do that!"
    }

    doCharity() {
        return "I like to help people."
    }

    conductPressInterview() {
        return "I am proud to be an American."
    }

    sayHi() {
        return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
    }

}

let georgeWashington = new President("George Washington", "None", 8, "Virginia")
let abrahamLincoln = new President("Abraham Lincoln", "Republican", 4, "Illinois")
let richardNixon = new President("Richard Nixon", "Republican", 5, "California")
let jimmyCarter = new President("Jimmy Carter", "Democrat", 4, "Georgia")