
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "id": 1,
          "username": "Alford Dawltrey",
          "password": "ltvY1wtKh3"
        }, {
          "id": 2,
          "username": "Caritta Ranaghan",
          "password": "cc3akN6S"
        }, {
          "id": 3,
          "username": "Georgeta Roddie",
          "password": "GfxMLA"
        }, {
          "id": 4,
          "username": "Abra Arkow",
          "password": "YynaqSuj1Nj0"
        }, {
          "id": 5,
          "username": "Ashbey Cowdery",
          "password": "KjK4LZa1"
        }, {
          "id": 6,
          "username": "Dorri Pedrozzi",
          "password": "sKOUAPMsrNW"
        }, {
          "id": 7,
          "username": "Boycey Giorgeschi",
          "password": "X3hjPNT943l"
        }, {
          "id": 8,
          "username": "Gabi Stringer",
          "password": "xv2bid8LaMi"
        }, {
          "id": 9,
          "username": "Lane Churchley",
          "password": "bFGvN02A3psE"
        }, {
          "id": 10,
          "username": "Denver Ramalhete",
          "password": "8B3JURr2hVDv"
        }
      ]);
    });
};
