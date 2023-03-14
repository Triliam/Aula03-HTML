function adicionar() {
   
    let elementoAdd = document.getElementById("skill")

    let buttonAdd = document.getElementById("adiciona")
    buttonAdd.addEventListener('click', elementoAdd)

    let resultAdd = document.getElementById("skillAdd")

    resultAdd.textContent = elementoAdd.value
    
}