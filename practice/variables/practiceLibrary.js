class LibraryItem {
    constructor(title, id, isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut(){
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(` ${this.title} checked out.`);
        } else{
            console.log(`Sorry ${this.title} is not available.`)
        }
    }
        returnItem(){
            if (!this.isAvailable){
                this.isAvailable = true
                console.log(`${this.title} unavailable for checkout. `);
             }else{
                console.log(`${this.title} is not checked out.`);
             }
            
            }
        
    }

    class Book extends LibraryItem {
        constructor(title, id, isAvailable, author, genre, ageGroup, summary){
        super(title, id, isAvailable)
        this.author = author;
        this.genre = genre;
        this.ageGroup = ageGroup;
        this.summary = summary;
        }
        getsummary(){
            console.log(`${this.title} summary: ${this.summary}`);
        }
    }

    let aGameofThrones = new Book("A Game of Thrones", "Novel", false, "George R. R. Martin", "Fantasy", "20+", "A very long series");

    console.log(aGameofThrones);
    aGameofThrones.getsummary();
    aGameofThrones.checkOut();

//     Book {
//   title: 'A Game of Thrones',
//   id: 'Novel',
//   isAvailable: false,
//   author: 'George R. R. Martin',
//   genre: 'Fantasy',
//   ageGroup: '20+',
//   summary: 'A very long series'
// }
// A Game of Thrones summary: A very long series
// Sorry A Game of Thrones is not available.
        
    class DVD extends LibraryItem{
        constructor(title, id, isAvailable, director, duration){
            super(title, id, isAvailable);
            this.director = director;
            this.duration = duration;
        }
        getDuration(){
            console.log(`${this.title} is directed by ${this.director} and is ${this.duration} minutes long`);

        }
    }

    let goneIn60Sec = new DVD("Gone in 60 Seconds", "DVD", false, "Dominc Sena", "118");

    console.log(goneIn60Sec);
    goneIn60Sec.getDuration();
    goneIn60Sec.returnItem();

//     DVD {
//   title: 'Gone in 60 Seconds',
//   id: 'DVD',
//   isAvailable: false,
//   director: 'Dominc Sena',
//   duration: '118'
// }
// Gone in 60 Seconds is directed by Dominc Sena and is 118 minutes long
// Gone in 60 Seconds unavailable for checkout.

    class Magazine extends LibraryItem{
        constructor(title, id, isAvailable, issueNumber, publisher){
            super(title, id, isAvailable);
            this.issueNumber = issueNumber
            this.publisher = publisher
        }

        getPublisher(){
            console.log(`${this.title} is published by ${this.publisher} and the issue number is ${this.issueNumber}.`);
        }
    }
    
    let natGeo = new Magazine("Nat Geo", "Magazine", true, "234", "National Geo");

    console.log(natGeo)
    natGeo.getPublisher();
    console.log(natGeo.isAvailable);
    natGeo.checkOut();
    console.log(natGeo.isAvailable);
    natGeo.returnItem();
    
//     Magazine {
//   title: 'Nat Geo',
//   id: 'Magazine',
//   isAvailable: true,
//   issueNumber: '234',
//   publisher: 'National Geo'
// }
// Nat Geo is published by National Geo and the issue number is 234.
// true
//  Nat Geo checked out.
// false
// Nat Geo unavailable for checkout.