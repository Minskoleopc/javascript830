class GrandFather {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
class Father extends GrandFather {
    constructor(firstName, lastName, fatherFatherName) {
        super(firstName, lastName)
        this.fatherFatherName = fatherFatherName
    }
    displayFatherName() {
        console.log(this.fatherFatherName + this.lastName)
        super.displayName()
    }
}

class Son extends Father {
    constructor(firstName, lastName, fatherFatherName, sonFirstName) {
        super(firstName, lastName, fatherFatherName)
        this.sonFirstName = sonFirstName
    }

    displaySonName() {
        console.log(this.sonFirstName + this.lastName)
        super.displayFatherName()
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")
chinmay.displaySonName()
//let shirish = new Father("manohar","deshpande","shirish")
//let Manohar = new GrandFather('manoharrao',"deshpande")


class FatherA {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayFatherFullName(){
        console.log(this.firstName + this.lastName)
    }
}

class SonA extends FatherA {
    constructor(firstName,lastName,sfname){
        super(firstName,lastName)
        this.sfname = sfname
    }

    displaySonName(){
        console.log(this.sfname + this.lastName)
    }

}
class DaughterA extends FatherA {

    constructor(firstName,lastName,dfname){
        super(firstName,lastName)
        this.dfname = dfname
    }

    displayDName(){
        console.log(this.dfname + this.lastName)
    }
    
}

let ShirishA = new FatherA("shirish","deshpande")
let ChinmayA = new SonA("shirish","deshpande","chinmay")
ChinmayA.displaySonName()
let GauriA = new DaughterA("shirish","deshpande","gauri")
GauriA.displayDName()
ChinmayA.displayFatherFullName()