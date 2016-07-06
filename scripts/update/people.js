// update documents
db.people.update(
  {surname:"Cordova"}, {
     $set: {surname:"EstherPia"}
   }
 )



db.people.update(
  {surname:"Jason"},
    {
      $set:{
        pets:["Mr.Kitty", "Dave"]
      }
    },
      {multi: true}
)
