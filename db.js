module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  userProfiles,
  addUser,
  addUserToProfile,
  addBlog,
  getBlogs


}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function userProfiles (connection) {
  return connection('users').join('profiles', 'users.id', 'profiles.user_id').select('users.name', 'profiles.id', 'users.email', 'profiles.url')
}

function addUser(connection, name, email) {
  return connection('users').insert({name: name, email: email})
}

function addUserToProfile(connection, url, id) {
  return connection('profiles').insert({url: url, user_id: id})
}

function addBlog(connection, title, content, id) {
  return connection('posts').insert({title: title, content: content, user_id: id})
}
function getBlogs(connection) {
  return connection('posts')
    .join('users', 'users.id', 'posts.user_id')
    .select('users.name', 'posts.title', 'posts.content')
}

function blogPrompt(){
  const selectedTitle = prompt('Please provide the title of the blog')
}
