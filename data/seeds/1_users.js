
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "username": "Alford Dawltrey",
          "password": "ltvY1wtKh3"
        }, {
          "username": "Caritta Ranaghan",
          "password": "cc3akN6S"
        }, {
          "username": "Georgeta Roddie",
          "password": "GfxMLA"
        }, {
          "username": "Abra Arkow",
          "password": "YynaqSuj1Nj0"
        }, {
          "username": "Ashbey Cowdery",
          "password": "KjK4LZa1"
        }, {
          "username": "Dorri Pedrozzi",
          "password": "sKOUAPMsrNW"
        }, {
          "username": "Boycey Giorgeschi",
          "password": "X3hjPNT943l"
        }, {
          "username": "Gabi Stringer",
          "password": "xv2bid8LaMi"
        }, {
          "username": "Lane Churchley",
          "password": "bFGvN02A3psE"
        }, {
          "username": "Denver Ramalhete",
          "password": "8B3JURr2hVDv"
        }
      ]);
    });
};
