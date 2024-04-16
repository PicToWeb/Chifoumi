const controller = require("../controller/chifoumiController");
const express = require("express");
const router = express.Router();

router.post("/new", controller.new); // initialisation -> voir comment vérifier si un enregistrement existe
router.get("/score", controller.getAll); //ok
router.put("/restart", controller.update); //ok
router.get("/score/:win/:lose/:tie", controller.cheating); //ok
router.put("/play/:choix", controller.partie);

module.exports = router;
