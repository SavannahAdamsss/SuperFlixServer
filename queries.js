const database = require("./connection");

module.exports = {
    list(){
        return database("favorites").select();
    },
    read(id){
        return database("favorites").select().where("id", id).first();
    },
    create(favorites){
        return database("favorites")
            .insert(favorites)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, favorites){
        return database("favorites")
            .update(favorites)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
        return database("favorites").delete().where("id", id);
    }
};