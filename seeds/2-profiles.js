exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901,  url: 'www.aardvark.org'}),
        knex('profiles').insert({user_id: 99902, url: 'www.baboon.org'}),
        knex('profiles').insert({user_id: 99903,  url: 'www.capybara.org'}),
        knex('profiles').insert({user_id: 99904,  url: 'www.duck.org'}),
        knex('profiles').insert({user_id: 99905,  url: 'www.elephant.org'}),
        knex('profiles').insert({user_id: 99906, url: 'www.flying.fox.org'}),
        knex('profiles').insert({user_id: 99907,  url: 'www.gila.monster.org'}),
        knex('profiles').insert({user_id: 99908,  url: 'www.heron.org'}),
        knex('profiles').insert({user_id: 99909,  url: 'www.impala.org'}),
        knex('profiles').insert({user_id: 99910,  url: 'www.jerboa.org'}),
        knex('profiles').insert({user_id: 99911,  url: 'www.kinkajou.org'}),
        knex('profiles').insert({user_id: 99912,  url: 'www.lemur.org'}),
        knex('profiles').insert({user_id: 99913,  url: 'www.mongoose.org'}),
        knex('profiles').insert({user_id: 99914, url: 'www.nyala.org'}),
        knex('profiles').insert({user_id: 99915,  url: 'www.ocelot.org'}),
        knex('profiles').insert({user_id: 99916,  url: 'www.panda.org'}),
        knex('profiles').insert({user_id: 99917, url: 'www.quokka.org'}),
        knex('profiles').insert({user_id: 99918,  url: 'www.rail.org'}),
        knex('profiles').insert({user_id: 99919,  url: 'www.sloth.org'}),
        knex('profiles').insert({user_id: 99920, url: 'www.terrapin.org'}),
        knex('profiles').insert({user_id: 99921,  url: 'www.urial.org'}),
        knex('profiles').insert({user_id: 99922,  url: 'www.viscacha.org'}),
        knex('profiles').insert({user_id: 99923,  url: 'www.wombat.org'}),
        knex('profiles').insert({user_id: 99924,  url: 'www.xerus.org'}),
        knex('profiles').insert({user_id: 99925,  url: 'www.yak.org'}),
        knex('profiles').insert({user_id: 99926,   url: 'www.zebu.org'})
      ]);
    });
};
