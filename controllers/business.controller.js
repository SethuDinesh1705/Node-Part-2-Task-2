const userModel = require("./business.model");
const fs = require("fs");

exports.insert = (req, res) => {
  userModel.createBusiness(req.body).then(
    (result) => {
      res.status(201).send(result);
    },
    (err) => {
      res.status(406).send(err);
    }
  );
};
exports.findBusinessById = (req, res) => {
  userModel.findBusinessById(req.params.userproductId).then(
    (result) => {
      res.status(200).send(result);
    },
    (err) => {
      res.status(err.status).send(err.message);
    }
  );
};
exports.updateBusinessById = (req, res) => {
  userModel.updateBusinessById(req.body, req.params.userproductId).then(
    (result) => {
      res.status(200).send(result);
    },
    (err) => {
      res.status(406).send(err);
    }
  );
};
exports.deleteBusinessById = (req, res) => {
  let id = req.params.userproductId;
  userModel.findBusinessById(id).then(
    (result) => {
      if (result.image != null) {
        fs.unlinkSync(result.image);
      }
      userModel.deleteBusinessById(id).then(
        (r) => {
          res.status(200).send(r);
        },
        (err1) => {
          res.status(406).send(err1);
        }
      );
    },
    (err) => {
      res.status(406).send(err);
    }
  );
};
exports.findAllBusiness = (req, res) => {
  userModel.findAllBusiness().then(
    (result) => {
      res.status(200).send(result);
    },
    (err) => {
      res.status(406).send(err);
    }
  );
};
