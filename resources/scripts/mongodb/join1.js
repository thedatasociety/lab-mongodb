db = db.getSiblingDB('thedatasocietydb');

// Obtém todas as publicações
var todasPublic = db.publicacoes.find();
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
