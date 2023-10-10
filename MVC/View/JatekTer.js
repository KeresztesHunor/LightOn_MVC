import Mezo from "./Mezo.js";

class JatekTer
{
    #szuloElem;
    #mezok;
    #meret;

    constructor(szuloElem, meret)
    {
        this.#szuloElem = szuloElem;
        this.#meret = meret;
        szuloElem.css("grid-template-columns", `repeat(${meret}, 1fr)`);
    }

    ujJatek()
    {
        this.#szuloElem.html("");
        this.#mezok = [];
        for (let i = 0; i < this.#meret * this.#meret; i++)
        {
            this.#mezok.push(new Mezo(this.#szuloElem, i));
        }
    }

    toggleMezoAllapot(index)
    {
        this.#mezok[index].toggleMezoAllapot();
    }
}

export default JatekTer;