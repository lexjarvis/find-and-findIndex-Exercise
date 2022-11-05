const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];


// Write a function called `findUserByUsername` 
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user) {
    return user.username === username;
  })
}


// Write a function called `removeUser`
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user) {
    return user.username === username;
  })
  if(foundIndex === -1) return;
  return usersArray.splice(foundIndex, 1) [0];
}
