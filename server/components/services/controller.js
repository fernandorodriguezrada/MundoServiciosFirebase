const store = require('./store');

function addService(serviceObject) {
  return new Promise((resolve, reject) => {
    if (Object.entries(serviceObject).length === 0) {
      console.log("[ProductsController]: Product doesn't have content, the product is empty");
      reject('There is no product');
    }

    store.add(serviceObject);
    resolve(serviceObject);
  });
};

function getServices() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

//TODO: Por hacer
// function getOnlyProduct(titleProduct) {
//   return new Promise((resolve, reject) => {
//     if (!titleProduct) {
//       console.log("[ProductsController]: Product doesn't have title for search, the title product is empty");
//       reject('There is no title product');
//     }

//     resolve(store.only(titleProduct));
//   })
// }

// function getOnlyProductByID(id) {
//   return new Promise((resolve, reject) => {
//     if (!id) {
//       console.log("[ProductsController]: Product doesn't have id for search, the id product is empty");
//       reject('There is no id product');
//     }

//     resolve(store.getID(id));
//   })
// }

function updateService(id, changeService) {
  return new Promise(async (resolve, reject) => {
    if (!id || !changeService) {
      console.log('[updateProduct] Error Data');
      reject('Data invalid in method patch');
    };

    const result = await store.update(id, changeService);
    resolve(result);
  });
}

function deleteService(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log('[deleteProduct] Error Data');
      reject('Data invalid in method delete');
    };

    const result = await store.delete(id);
    resolve(result);
  });
}

module.exports = {
  addService,
  getServices,
  // getOnlyProduct,
  // getOnlyProductByID,
  updateService,
  deleteService,
}