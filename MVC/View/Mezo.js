class Mezo
{
    #mezoElem;

    constructor(szuloElem, index)
    {
        szuloElem.append(`
            <div class="mezo off"></div>
        `);
        this.#mezoElem = szuloElem.children("div:last-child");
        this.#mezoElem.on("click", () => {
            window.dispatchEvent(new CustomEvent("mezoreKattintottEvent", {
                detail: {
                    index: index
                }
            }));
        });
    }

    toggleMezoAllapot()
    {
        this.#mezoElem.toggleClass("on");
        this.#mezoElem.toggleClass("off");
    }
}

export default Mezo;