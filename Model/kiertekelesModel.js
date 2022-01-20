class Kiertekel {
  constructor(tomb) {
    this.tomb = tomb;
    /*    console.log(this.tomb); */
  }

  getVizszintes() {
    let ellX = "";
    this.tomb.forEach((element, index) => {
      /*    console.log(element.ertek); */
      ellX += element.ertek;
      if (index % 3 == 2) {
        ellX += "@";
      }
    });
    return ellX;
  }

  getFuggoleges() {
    let ellY = "";
    for (let i = 0; i < 3; i++) {
      ellY +=
        this.tomb[i].ertek + this.tomb[i + 3].ertek + this.tomb[i + 6].ertek;

      ellY += "@";
    }
    return ellY;
  }

  getAtlos() {
    let ell =
      this.tomb[0].ertek + this.tomb[4].ertek + this.tomb[8].ertek + "@";
    ell += this.tomb[2].ertek + this.tomb[4].ertek + this.tomb[6].ertek;
    return ell;
  }

  ellenorzes() {
    let ell =
      this.getVizszintes() + "@" + this.getAtlos() + "@" + this.getFuggoleges();
    let allapot = "";
    if (ell.indexOf("XXX") >= 0) {
      allapot = "X";
    } else if (ell.indexOf("OOO") >= 0) {
      allapot = "O";
    }
    return allapot;
  }
}
