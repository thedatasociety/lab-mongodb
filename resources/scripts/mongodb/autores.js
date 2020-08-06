db = db.getSiblingDB('thedatasocietydb');

// Variável todosAutores contendo documentos da coleção autores
var todosAutores = db.autores.find();

// Exibe todos os autores
todosAutores;

// Exibe todos os autores em formato JSON
todosAutores.forEach(printjson);
