class Gyozelem
{
    #szuloElem;

    constructor(szuloElem)
    {
        this.#szuloElem = szuloElem;
    }

    ujJatek()
    {
        this.#szuloElem.html("");
    }

    gyozelem()
    {
        this.#szuloElem.append(`
            <p>Nyertél!</p>
        `);
    }
}

export default Gyozelem; 