class InfoView {
  constructor() {
    this.jategvegeElem = $(".jategvege");
    this.kovetkezoJatekosElem = $(".kovetkezoJatekos");
  }

  setJatekvege(ertek) {
    this.jategvegeElem.html(ertek);
  }

  setKovetkezoJatekos(ertek) {
    this.kovetkezoJatekosElem.html(ertek);
  }
}
