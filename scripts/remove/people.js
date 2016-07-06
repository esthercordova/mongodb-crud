// remove documents
// then people taller than 5'11"
db.people.remove({"surname": "Malone" })

db.people.remove({ height: { $gt: 71 }})
