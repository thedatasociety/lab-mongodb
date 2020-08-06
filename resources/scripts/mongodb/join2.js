db = db.getSiblingDB('thedatasocietydb');

// Obtém publicações com título Vida Pré-Histórica
var todasPublic = db.publicacoes.find({"titulo":"Vida Pré-Histórica"});
// Para cada publicação
while (todasPublic.hasNext()) {
   var umaPublic = todasPublic.next();
   print();
   print("Titulo..: " + umaPublic.titulo); // Exibe titulo
   // Obtém os autores daquela publicação
   var autoresPublic = db.autores.find({"publicacao": umaPublic._id});
   while (autoresPublic.hasNext()) {
     print("Autor...: " + autoresPublic.next().autor); //Exibe autor
   }
}
