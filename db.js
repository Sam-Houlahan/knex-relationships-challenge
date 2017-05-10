
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  userProfiles,
  addUser,
  addUserToProfile

}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function userProfiles (connection){
  return connection('users')
  .join('profiles','users.id','profiles.user_id')
  .select('users.name','profiles.id','users.email','profiles.url')
}


function addUser (connection,name,email){
  return connection('users')
  .insert({ name:name, email:email,})
}

function addUserToProfile(connection,url,id){
  return connection('profiles')
  .insert({url:url, user_id:id})
}
