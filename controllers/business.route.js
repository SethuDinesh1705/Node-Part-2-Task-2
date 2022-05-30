const userController = require("./business.controller");
const userModel = require("./business.model");

exports.businessRoutes = function (app) {
  app.post("/userproduct", [userController.insert]);
  app.get("/userproduct/:userproductId", [userController.findBusinessById]);
  app.put("/userproduct/:userproductId", [userController.updateBusinessById]);
  app.delete("/userproduct/:userproductId", [
    userController.deleteBusinessById,
  ]);
  app.get("/userproduct", [userController.findAllBusiness]);
};
