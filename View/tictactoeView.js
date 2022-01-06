/* Megjelenít egyetlen elemet */
class Elem {
  constructor(szuloElem) {
    this.node = szuloElem;
    this.elem = szuloElem.append("<div><p></p></div>");
    this.elem = this.node.children("div:last");
    this.aktiv = true;
    this.ertek = "#";
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
      if (this.aktiv) {
        this.kattintastrigger();
        this.aktiv = false;
      }
    });
  }
  setElem(ertek) {
    this.ertek = ertek;
    this.pElem.html(ertek);
  }

  kattintastrigger() {
    let esemeny = new CustomEvent("kivalaszt", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

class Jatekter {
  constructor(tomb) {
    const szuloElem = $("article");
    for (let i = 0; i < 9; i++) {
      const elem = new Elem(szuloElem);
      tomb.push(elem);
      //elem.setElem("X");
    }
  }
}
