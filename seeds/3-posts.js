exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 99901,  title: 'Bad Day', content:'Today was a bad day....'}),
        knex('posts').insert({user_id: 99901, title: 'Traffic', content:'Traffic in this City sucks here is my solution....'}),
        knex('posts').insert({user_id: 99903,  title: 'Life', content:'Life is a mental test'}),
        knex('posts').insert({user_id: 99904,  title: 'Politics', content:'Politics need a change...'}),
        knex('posts').insert({user_id: 99904,  title: 'Programming', content:'Why computer programming is amazing...'}),
        knex('posts').insert({user_id: 99904, title: 'Why life is good', content:'Why life is worth living for....'}),
        knex('posts').insert({user_id: 99907,  title: 'Day in the life', content:'Day in the life of a web developer'}),
        knex('posts').insert({user_id: 99907,  title: 'Meetup', content:'Today I went to a meetup...'}),
        knex('posts').insert({user_id: 99909,  title: 'Exams', content:'Here is my reasoning behind why exams are bad..'}),
        knex('posts').insert({user_id: 99910,  title: 'Uni', content:'Uni is broken....'}),
        knex('posts').insert({user_id: 99911,  title: 'Travel', content:'Top travel destination picks...'})
      ])
    });
};
