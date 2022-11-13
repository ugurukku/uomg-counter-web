let dropdown = document.getElementById('dropdown');

let count = Number(dropdown.options[dropdown.selectedIndex].text);

let tableBody = document.querySelector(".table-body");

createArray = () => {

    tableBody.innerHTML = "";

    count = Number(dropdown.options[dropdown.selectedIndex].text);

    for (var a = 0; a < count; a++) {

        let tableRow = document.createElement('tr');

        let td1 = document.createElement('td');
        let tdInput = document.createElement('td');
        let td2 = document.createElement('td');
        let tdInput2 = document.createElement('td');

        let input1 = document.createElement('input');
        let input2 = document.createElement('input');


        td1.align = 'center';
        td2.align = 'center';

        input1.type = 'number';
        input1.classList.add('form-control');
        input1.classList.add('umumi-bal');
        input1.required = true;
        input2.type = 'number';
        input2.classList.add('form-control');
        input2.classList.add('kredit-sayi');
        input2.required = true;

        td1.textContent = 'Ümumi bal:';
        td2.textContent = 'Kredit sayı:';


        tdInput.appendChild(input1);
        tdInput2.appendChild(input2);

        tableRow.appendChild(td1);
        tableRow.appendChild(tdInput);
        tableRow.appendChild(td2);
        tableRow.appendChild(tdInput2);

        tableBody.append(tableRow);
    }


}



dropdown.addEventListener("change", function () {
    createArray();
});

createArray();

//////////////////

hesabla = () => {
    let inputsKredit = document.getElementsByClassName('kredit-sayi');
    let kreditInputsArray = Array.prototype.slice.call(inputsKredit);
    var valuesKredit = [];
    kreditInputsArray.map(input => valuesKredit.push(Number(input.value)))

    let inputsUmumi = document.getElementsByClassName('umumi-bal');
    umumiInputsArray = Array.prototype.slice.call(inputsUmumi);
    let valuesUmumi = [];
    umumiInputsArray.map(input => valuesUmumi.push(Number(input.value)))

    let mexrec = 0;
    valuesKredit.map(value => mexrec = mexrec + value)

    let suret = 0;
    for (var v = 0; v < valuesKredit.length; v++) {
        suret = suret + valuesKredit[v] * valuesUmumi[v];
    }

    const netice = (suret / mexrec);

    let result = document.getElementById('result');


    if (!isNaN(netice)) {
        result.innerText =`Sizin nəticəniz: ${netice.toFixed(2)}`;
    } else {
        result.innerText = "Məlumatları düzgün daxil etməmisiniz."
    }

}