

let arrValues = [];

/* =========== Adicionando Números ======== */

const addNumbers = (ev) => {
    ev.preventDefault();  //to stop the form submitting

    let numeros = document.getElementById('valores').value;

    if(numeros != ""){
        arrValues.push(numeros);

        displayingNumb(arrValues, "inserindo")
    }else{
        alert("digite um número por favor");
    }    

    document.forms[0].reset();  //to clear the form for the next entries
    //document.querySelector('form').reset(); //do the same as above    

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(arrValues));
}

/* =========== displaying numbers ======== */
function displayingNumb(vetor, forma)
{ 
    let ulvar = '<ul>';
    for (i=0; i < vetor.length; i++)
    {
        ulvar += '<li>'+vetor[i]+'</li>';
    }
    ulvar +='</ul>';

    let ultitulo = "";

    if (forma == "inserindo")
    {
        ultitulo = "Veja a listagem dos números que você acabou de inserir";
    }else{
        ultitulo = "Você acabou de ordenar a lista usando algoritmo "+forma;;
    }

    document.getElementById("ulTitle").innerHTML = ultitulo; 
    let urll = document.getElementById("ulLista").innerHTML = ulvar; 

    //return ulvar
}


/* =========== Bubble Sort ======== */

function bubbleSort(myArr) {
    let aForma = "Bubble Sort";
    let swap;
    let last = myArr.length - 1;
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if (myArr[i] > myArr[i + 1]) {
                [myArr[i], myArr[i + 1]] = [myArr[i + 1], myArr[i]]; // a modern way of swapping 
                swap = true;
            }
        }
        last--;

    } while (swap);    
    
    displayingNumb(myArr, aForma);

   // return myArr;
}

/* =========== Selection Sort ======== */
function selectionSort(vetor) {
    let aForma = "Selection Sort";
    let menor;

    for (let i = 0; i < vetor.length; i++) {
        menor = i;

        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }

        if (i != menor) {
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]]; // a modern way of swapping               
        }
    }

    displayingNumb(vetor, aForma);
    //return vetor;
}

/* =========== Quick Sort ======== */

function quickSort(vetor) {
    if (vetor.length === 0) return [];

    if (vetor.length === 1) return vetor;

    let pivot = vetor[0];

    let head = vetor.filter(n => n < pivot);

    let equal = vetor.filter(n => n === pivot);

    let tail = vetor.filter(n => n > pivot);
   

    return  quickSort(head).concat(equal).concat(quickSort(tail));

}

function displayingQS(vetor)
{
    let newArr = quickSort(vetor);

    let ulvar = '<ul>';
    for (i=0; i < newArr.length; i++)
    {
        ulvar += '<li>'+newArr[i]+'</li>';
    }
    ulvar +='</ul>';

    let ultitulo = "Você acabou de ordenar a lista usando algoritmo Quick Sort ";
    
    let ulTile = document.getElementById("ulTitle").innerHTML = ultitulo; 
    let urll = document.getElementById("ulLista").innerHTML = ulvar;

}



/* =========== Shuffle - Misturar ======== */
function shuffle(vetor) {
    let aForma = "Shuffle Sort";
    let shuffledArray = [];
    let usedIndexes = []
    let i = 0

    while (i < vetor.length) {
        let randomNumber = Math.floor(Math.random() * vetor.length);
        if (!usedIndexes.includes(randomNumber)) {
            shuffledArray.push(vetor[randomNumber]);
            usedIndexes.push(randomNumber);
            i++;
        }
    }
    
    displayingNumb(shuffledArray, aForma);

    //return shuffledArray;    
}

function ordenarNums(evt) {
    evt.preventDefault();  //to stop the form submitting
   
    if (arrValues.length > 0) {
        //getting selected value from a dropdown list
        let orderForma = document.querySelector("#escolha").value;

        if(orderForma === "bubbleSort"){

            bubbleSort(arrValues);

            console.log("The Array BubbleSort: " + bubbleSort(arrValues));

        }else if(orderForma === "selectionSort"){

            selectionSort(arrValues);
            console.log("The Array SelectionSort: " + selectionSort(arrValues));

        }else if(orderForma === "quickSort")
        {
            displayingQS(arrValues);
            console.log("The Array QuickSort: " + displayingQS(arrValues));
        }

    }else{
        alert("Por favor, adicione números a lista")
    }


    document.forms[0].reset();  //to clear the form for the next entries
}

function misturarNums(evt) {
    evt.preventDefault();  //to stop the form submitting
   
    if (arrValues.length > 0) {
         shuffle(arrValues);
    }else{
        alert("Por favor, adicione números a lista")
    }


    document.forms[0].reset();  //to clear the form for the next entries
}




//let theArray = [400, 300, 20, 3, 8, 150, 11, 15, 50, 200, 40, 100];

//console.log(displayingNumb(theArray));

//console.log("The Array before: " + theArray);

//console.log("The Array QuickSort: " + quickSort(theArray));


//using the array function more easier
// console.log("The Array Function sort(crescent ): " + theArray.sort( (a, b) => a - b )  );

// console.log("The Array Function sort(decrescent ): " + theArray.sort( (a, b) => b - a )  );

//console.log("Shuffle the Array:  " + shuffle(theArray));

console.log(arrValues);




document.addEventListener('DOMContentLoaded', () => {
     document.getElementById('addNumb').addEventListener('click', addNumbers);
     document.getElementById('ordenar').addEventListener('click', ordenarNums);
     document.getElementById('misturar').addEventListener('click', misturarNums);
});

