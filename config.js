/**
 * Created by owen.thompson on 25/07/2015.
 */

var config = {}

config.host = process.env.HOST || "https://syntregotest.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "eqxFHjOAmKR62ddkZXuNs4zliCImMF6xEBB4HSVTCCapNxY9b2TQkj/IDRAeqQS4X/aJ4i3bx420q7NwI3rhjQ==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;

