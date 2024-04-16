const controller = {};
const Chifoumi = require("../model/chifoumi");

// game/new
controller.new = (req, res) => {
  const chifoumi_data = {
    id: 1,
    choix: "",
    win: 0,
    lose: 0,
    tie: 0,
  };

  Chifoumi.create(chifoumi_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

// game/score
controller.getAll = (req, res) => {
  Chifoumi.find()
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

//game/play/:action
controller.partie = (req, res) => {
  const chifoumi_data = {};
  const UserChoix =
    req.params.choix === "pierre"
      ? "pierre"
      : req.params.choix === "ciseaux"
      ? "ciseaux"
      : "feuille";
  chifoumi_data.choix = UserChoix;
  const gainPartie = Chifoumi.findOne({ id: 1 }, "win");
  /*   console.log(gainPartie);
  console.log("--------");
  console.log(Chifoumi.findOne({ id: 1 }).select("win")); */

  Chifoumi.updateOne({ id: 1 }, chifoumi_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

//game/restart
controller.update = (req, res) => {
  const chifoumi_data = {
    choix: "",
    win: 0,
    lose: 0,
    tie: 0,
  };
  Chifoumi.updateOne({ id: 1 }, chifoumi_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

//game/score/:win/:lose/:tie
controller.cheating = (req, res) => {
  const chifoumi_data = {
    win: req.params.win,
    lose: req.params.lose,
    tie: req.params.tie,
  };
  Chifoumi.updateOne({ id: 1 }, chifoumi_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};
/* controller.cheating = (req, res) => {
  Chifoumi.deleteOne({ _id: req.params.id })
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
}; */

module.exports = controller;
