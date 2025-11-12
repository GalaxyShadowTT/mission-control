function zaplanujMisje(nazwaMisji, typMisji) {
    return {
        nazwa: nazwaMisji,
        typ: typMisji,
        zaloga: ["Alex", "Atsushi", "Ginger goverment Labrat"],
        dystans: 0,
        badawczeCele: ["Zrobić to samo co zielony debil Jet"],
        storage: {
            narzedzia: ["jet", "wifi"],
            zapasy: 100
        }
    }
}



function dodajDoZalogi(misja, czlonek) {
    misja.zaloga.push(czlonek);
}





function zaladujSprzet(misja, sprzet) {
    misja.storage.narzedzia.push(sprzet)
}





function przemierzDystans(misja, odleglosc) {
    misja.dystans = odleglosc;

    misja.storage.zapasy = odleglosc * 10;
}


const misja = zaplanujMisje("Test", "Eksperyment");

przemierzDystans(misja, 4);
przemierzDystans(misja, 6);
przemierzDystans(misja, 12);


function raportMisji(misja) {
    console.log("misja report: ")
    console.log("")
    console.log("misja: "+misja.nazwa);
    console.log("")
    console.log("misja typ: "+misja.typ);
    console.log("")
    console.log("Members of the crew: ");
    misja.zaloga.map((czlonek)=> console.log(czlonek));
    console.log("")
    console.log("Badawcze cele: ");
    misja.badawczeCele.map((task)=> console.log(task));
    console.log("")
    console.log("storage: ")
    console.log("narzedzia: ");
    misja.storage.narzedzia.map((narzedzia)=> console.log(narzedzia));
    console.log("")
    console.log("Zapasów ile zostało: "+misja.storage.zapasy);

}


raportMisji(misja)
// console.log(misja);

// const misja = {
//     nazwa: "Ekspedycja na Marsa",
//     typ: "Badawcza",
//     zaloga: ["kpt. Nowak", "dr Kowalska"],
//     dystans: 0, 
//     celeBadawcze: ["Analiza próbek gleby", "Poszukiwanie wody"],
//     ladownia: {
//         narzedzia: ["Spektrometr", "Wiertło geologiczne"],
//         zapasy: 100
//     }
// }


// const misjaAlfa = zaplanujMisje("Ekspedycja na Marsa", "Badawcza");

// dodajDoZalogi(misjaAlfa, "Specjalista ds. komunikacji");
// zaladujSprzet(misjaAlfa, "Generator tlenu");
// zaladujSprzet(misjaAlfa, "Drukarka 3D");

// przemierzDystans(misjaAlfa, 10);
// przemierzDystans(misjaAlfa, 5);

// console.log(raportMisji(misjaAlfa));