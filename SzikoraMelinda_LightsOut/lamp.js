
class Lamp {

    constructor(elem, index) {

        this.elem = elem;
        this.index = index;
        this.allapot = false;

        this.elem.on("click", () => {

            //console.log(this);

            this.setAllapot();
            this.KattintasTrigger();
        });

    }

    setAllapot() {

        this.allapot =! this.allapot;
        this.setSzin();
    }

    setSzin() {

        if (this.allapot) {
            
            this.elem.css("background-color", "gold");

        } else {
            
            this.elem.css("background-color", "grey");
        }
    }

    KattintasTrigger() {

        let esemeny = new CustomEvent("felkapcsolas", {detail:this.index});

        window.dispatchEvent(esemeny);
    }


}