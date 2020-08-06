db = db.getSiblingDB('thedatasocietydb');

// Obtendo id automática da função ObjectId
publicacaoId = ObjectId();

// Inserir um documento na coleção publicacoes com _id automática
db.publicacoes.insert(
  {	"_id": publicacaoId,
     "tipo": "livro",
	"titulo": "Vida Pré-Histórica",
	"ano": 2014
  }
);

// Inserir um documento na coleção autores com _id automática referenciando a publicacao anterior
db.autores.insert(
  {
	"autor": "Melissa",
	"publicacao": publicacaoId
  }
);


//Outro autor para a mesma publicação
db.autores.insert(
  {
	"autor": "Bryan",
	"publicacao": publicacaoId
  }
);




