exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "favorites"; ALTER SEQUENCE favorites_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      let favorites = [
        {
          id: 1,
          movie_id: 351286,
          title: "Jurassic World: Fallen Kingdom",
          image_URL: "/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg",
        },
        {
          id: 2,
          movie_id: 383498,
          title: "Deadpool 2",
          image_URL: "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
        }
      ]
      return knex('favorites').insert(favorites)
    })
}