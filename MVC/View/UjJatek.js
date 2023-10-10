class UjJatek
{
    constructor(szuloElem)
    {
        szuloElem.html(`
            <button id="uj-jatek-gomb">Új játék</button>
        `);
        $("#uj-jatek-gomb").on("click", () => {
            window.dispatchEvent(new CustomEvent("ujJatek"));
        });
    }
}

export default UjJatek;