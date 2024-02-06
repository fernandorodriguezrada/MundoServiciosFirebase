const db = require('./model');

async function addServices(serviceObject) {
  const docRef = db.collection('servicios');
  return await docRef.add(serviceObject);
}

async function getAllServices() {
  const snapshot = await db.collection('servicios').get();

  // snapshot.docs.map((product) => console.log(product.data().category.path));
  return snapshot.docs.map((service) => {
    return {
      id: service.id,
      service: service.data()
    }
  });
}

//TODO: Por terminar
// async function getOnlyProduct(title) {
//   const productReference = db.collection('products');
//   const snapshot = await productReference.where('title', '==', title).get();

//   if (snapshot.empty) {
//     console.error('No matching!!');
//     return;
//   }

//   return snapshot.docs.map((product) => {
//     return {
//       id: product.id,
//       product: product.data()
//     }
//   })
// }

// async function getOnlyProductByID(id) {
//   const productReference = db.collection('products').doc(`${id}`);
//   const snapshot = await productReference.get();

//   if (!snapshot.exists) {
//     console.error('No matching!!');
//     return;
//   }

//   return snapshot.data();
// }

async function updateService(id, change) {
  const service = db.collection('servicios').doc(id);

  const updateChange = await service.update(change);

  return updateChange;
}

async function deleteService(id) {
  const serviceDeleted = await db.collection('servicios').doc(id).delete();

  return serviceDeleted;
}

module.exports = {
  add: addServices,
  list: getAllServices,
  // only: getOnlyProduct,
  // getID: getOnlyProductByID,
  update: updateService,
  delete: deleteService,
}