class TTTController {
  constructor() {
    const tomb = [];
    new Jatekter(tomb);
    this.info = new InfoView();
    /* Ellenőrizzük azt, hogy van a győzelem */
    const kiertekel = new Kiertekel(tomb);
    this.lepes = 0;
    $(window).on("kivalaszt", (event) => {
      //console.log(event.detail);
      let aktelem = event.detail;
      if (this.lepes % 2 === 0) {
        aktelem.setElem("X");
        this.info.setKovetkezoJatekos("O következik");
      } else {
        aktelem.setElem("O");
        this.info.setKovetkezoJatekos("X következik");
      }
      this.lepes++;
      //console.log(kiertekel.ellenorzes());

      if (kiertekel.ellenorzes() === "X") {
        this.info.setJatekvege("X nyert");
        this.jategVege(tomb);
      } else if (kiertekel.ellenorzes() === "O") {
        this.info.setJatekvege("O nyert");
        this.jategVege(tomb);
      } else if (this.lepes === 9) {
        this.info.setJatekvege("Döntetlen");
      }
    });
  }

  jategVege(tomb) {
    this.info.setKovetkezoJatekos("Vége");
    tomb.forEach((element) => {
      element.aktiv = false;
    });
  }
}
