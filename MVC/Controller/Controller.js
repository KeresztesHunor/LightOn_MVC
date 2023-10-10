import Model from "../Model/Model.js";
import UjJatek from "../View/UjJatek.js";
import JatekTer from "../View/JatekTer.js";
import Gyozelem from "../View/Gyozelem.js";

class Controller
{
    #modell;
    #jatekTerView;
    #gyozelemView;
    #ujJatekView;

    constructor(meret)
    {
        this.#modell = new Model(meret);
        this.#jatekTerView = new JatekTer($("#jatek-ter"), meret);
        this.#gyozelemView = new Gyozelem($("#gyozelem"));
        this.#ujJatekView = new UjJatek($("#uj-jatek"));
        $(window).on("mezoreKattintottEvent", event => {
            if (this.#modell.vege())
            {
                return;
            }
            const VALTOZOTT_MEZO_INDEXEK = this.#modell.szomszedokKeresese(event.detail.index);
            this.#modell.toggleMezoErtek(event.detail.index);
            this.#jatekTerView.toggleMezoAllapot(event.detail.index);
            VALTOZOTT_MEZO_INDEXEK.forEach(mezoIndex => {
                this.#modell.toggleMezoErtek(mezoIndex);
                this.#jatekTerView.toggleMezoAllapot(mezoIndex);
            });
            if (this.#modell.vege())
            {
                this.#gyozelemView.gyozelem();
            }
        });
        $(window).on("ujJatek", () => {
            this.#ujJatek();
        });
        this.#ujJatek();
    }

    #ujJatek()
    {
        this.#modell.ujJatek();
        this.#jatekTerView.ujJatek();
        this.#gyozelemView.ujJatek();
    }
}

export default Controller;