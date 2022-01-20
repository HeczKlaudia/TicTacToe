const { test } = QUnit;
let tomb = [];
let tictactoe = new Kiertekel(tomb);

/* VÍZSZINTES */
QUnit.module("vízszintes", function (hook) {
  test("getViszintes létezik-e?", (assert) => {
    assert.ok(tictactoe.getVizszintes, "vizszintes ellenőrzés létezik");
  });

  test("getViszintes függvény-e?", (assert) => {
    assert.ok(
      typeof tictactoe.getVizszintes === "function",
      "Ez egy függvény."
    );
  });

  test("Üres tictactoe", function (assert) {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "###@###@###@");
  });

  test("első sor X", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "XXX@###@###@");
  });

  test("masodik sor X", (assert) => {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "###@XXX@###@");
  });

  test("harmadik sor X", (assert) => {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "###@###@XXX@");
  });

  test("nincs nyerő póz vízszintesen", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "XOX@OXO@XOX@");
  });

  test("1. sor végén X, következőben 2 X", (assert) => {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getVizszintes(), "##X@XX#@###@");
  });
});

/* FÜGGŐLEGES */

QUnit.module("függőleges", function (hook) {
  test("getFuggoleges létezik-e?", (assert) => {
    assert.ok(tictactoe.getFuggoleges, "függőleges ellenőrzés létezik");
  });

  test("getFuggoleges függvény-e?", (assert) => {
    assert.ok(
      typeof tictactoe.getFuggoleges === "function",
      "Ez egy függvény."
    );
  });

  test("Üres tictactoe", function (assert) {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "###@###@###@");
  });

  test("Első oszlop X", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "X##@X##@X##@");
  });

  test("2. oszlop X", function (assert) {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "#X#@#X#@#X#@");
  });

  test("3. oszlop X", function (assert) {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "##X@##X@##X@");
  });

  test("nincs nyerő póz függőlegesen", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "XOX@OXO@XOX@");
  });

  test("1. oszlop végén X, következőben 2 X", (assert) => {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getFuggoleges(), "#X#@#X#@X##@");
  });
});

/* ÁTLÓ */

QUnit.module("átlós", function (hook) {
  test("getAtlos létezik-e?", (assert) => {
    assert.ok(tictactoe.getAtlos, "átlós ellenőrzés létezik");
  });

  test("getAtlos függvény-e?", (assert) => {
    assert.ok(typeof tictactoe.getAtlos === "function", "Ez egy függvény.");
  });

  test("átló vizsgálat", function (assert) {
    let tomb = [
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "X" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlos(), "XXX@#X#");
  });

  test("üres átló", function (assert) {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.getAtlos(), "###@###");
  });
});

/* ALAP ELLENŐRZÉS */

QUnit.module("alap ellenőrzés", function (hook) {
  test("ellenorzes létezik-e?", (assert) => {
    assert.ok(tictactoe.ellenorzes, "ellenorzes ellenőrzés létezik");
  });

  test("ellenorzes függvény-e?", (assert) => {
    assert.ok(typeof tictactoe.ellenorzes === "function", "Ez egy függvény.");
  });

  test("Üres alap", function (assert) {
    let tomb = [
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
      { ertek: "#" },
    ];
    let tictactoe = new Kiertekel(tomb);
    assert.equal(tictactoe.ellenorzes(), "");
  });
});
