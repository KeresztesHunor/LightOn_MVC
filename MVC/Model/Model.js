class Model
{
    #mezok;
    #meret;

    constructor(meret)
    {
        this.#meret = meret;
    }

    ujJatek()
    {
        this.#mezok = [];
        for (let i = 0; i < this.#meret * this.#meret; i++)
        {
            this.#mezok.push(false);
        }
    }

    toggleMezoErtek(index)
    {
        this.#mezok[index] = !this.#mezok[index];
    }

    szomszedokKeresese(index)
    {
        const VALTOZOTT_MEZO_INDEXEK = [];
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, index + 1);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, index - 1);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, index + this.#meret);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, index - this.#meret);
        return VALTOZOTT_MEZO_INDEXEK;
    }

    vege()
    {
        let i = 0;
        while (i < this.#mezok.length && this.#mezok[i])
        {
            i++;
        }
        return i >= this.#mezok.length;
    }

    #listahozSzomszedosIndexetHozzaad(lista, index)
    {
        if (index >= 0 && index < this.#meret * this.#meret)
        {
            lista.push(index);
        }
    }
}

export default Model;