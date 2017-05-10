
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  userProfiles

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
