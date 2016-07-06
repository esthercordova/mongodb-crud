db.cities.find({population: {$gt: 20000}}).pretty();

db.cities.find({name:"Jasontopia"});

db.cities.find({population: {$gt: 2000}}).pretty()

db.cities.find("this.population > 20000");

// run this in terminal inside of mongo!
