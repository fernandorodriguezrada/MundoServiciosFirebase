const db = require('./model.js');

// read

async function getAllShipping() {
  const snapshot = await db.collection('transportes').get();

  return snapshot.docs.map(transporte => {
    return {
      id: transporte.id,
      transporte: transporte.data(),
    }
  })
}

module.exports = {
  list: getAllShipping
}