class Vehicle{
    constructor (year, make, model, mileage){
        this.year = year;
        this.make = make;
        this.model = model;
        this.mileage = mileage;
    }

    drive(distance){
        if(distance > 0)this.mileage += distance;
    };
    getDetails(){
        return `This AMAZING ${this.year} ${this.make} ${this.model} has ${this.mileage}'s miles on it!`;
    }

    updatedMiles(){
        return this.mileage
    }
}

let myFavCar = new Vehicle(1997, "Toyota", "Supra", 90);
let skyLine = new Vehicle(1998, "Nissan", "Skyline", 100);
let honda = new Vehicle(2002, "Honda", "Accord", 700)




console.log(honda.mileage); //Output 700
honda.drive(300);
console.log(honda.updatedMiles()); //Output 1000
console.log(honda.getDetails()); //Output This AMAZING 2002 Honda Accord has 1000's miles on it!

console.log(myFavCar.mileage); //Output 90
myFavCar.drive(1000);
console.log(myFavCar.updatedMiles()); //Output 1090
console.log(myFavCar.getDetails()); //Output This AMAZING 1997 Toyota Supra has 1090's miles on it!

console.log(skyLine.mileage); //Output 100
skyLine.drive(8000);
console.log(skyLine.updatedMiles()); //Output 8100
console.log(skyLine.getDetails()); //Output his AMAZING 1998 Nissan Skyline has 8100's miles on it!