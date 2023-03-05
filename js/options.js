let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');


function CreateElementsOption(elem, k, j) {
    for(i = k; i < j; i++) {
        let newOption = new Option(i, i);
        elem.append(newOption);
    }    
}

CreateElementsOption(day, 1, 32);
CreateElementsOption(month, 1, 13);
CreateElementsOption(year, 1900, 2100);



