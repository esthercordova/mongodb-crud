// Remove pets born before 1996

db.pets.remove({ bornOn : { $lt: '1996-01-01' }})
