db = db.getSiblingDB('thedatasocietydb');

// Obtendo todas as publicações
var todasPublic = db.publicacoes.find();

// Exibindo apenas os títulos das publicações
while (todasPublic.hasNext()) {
   print(todasPublic.next().titulo);
}
