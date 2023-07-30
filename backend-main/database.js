const mongoose = require("mongoose");
const config = require("./utils/config");
//mongoose.connect(config.MONGODB_URI);
mongoose.connect("mongodb://0.0.0.0:27017/tesis");
//mongoose.connect("mongodb+srv://tesis:Tesis123@cluster0.gzew6uq.mongodb.net/?retryWrites=true&w=majority");

const objetobd = mongoose.connection;

objetobd.on("connected", async () => {


  //const db = objetobd.connection.db; // Obtiene la instancia de la base de datos
  const collectionName = "blockchains"; // Reemplaza con el nombre de tu colección

  try {
    const collectionStats = await objetobd.collection(collectionName).stats();
    const sizeInBytes = collectionStats.size;

    console.log(`Tamaño de la colección "${collectionName}": ${sizeInBytes} bytes`);
  } catch (error) {
    console.error("Error al obtener el tamaño de la colección:", error);
  }

  console.log("Conexión exitosa a MongoDB");
});

objetobd.on("error", (error) => {
  console.error("Error en la conexión a MongoDB:", error);
});


async function initial() {
  try {
    const collection = mongoose.connection.collection("blockchains");

    await collection.createIndex(
      { heigh: 1 },
      { name: 'heigh_index', unique: true, sparse: true, background: true, collation: { locale: 'en_US', numericOrdering: true } }
    );

    console.log("Índice creado exitosamente");
  } catch (error) {
    console.error("Error al crear el índice:", error);
  }
}



module.exports = mongoose;
