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
        const X = index % this.#meret;
        const Y = Math.floor(index / this.#meret);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, X + 1, Y);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, X - 1, Y);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, X, Y + 1);
        this.#listahozSzomszedosIndexetHozzaad(VALTOZOTT_MEZO_INDEXEK, X, Y - 1);
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

    #listahozSzomszedosIndexetHozzaad(lista, x, y)
    {
        if (x >= 0 && x < this.#meret && y >= 0 && y < this.#meret)
        {
            lista.push(x + y * this.#meret);
        }
    }
}

export default Model;