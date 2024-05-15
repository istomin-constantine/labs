function closeSpan(){
    document.getElementById('price-span').style.display = 'none'
    document.getElementById('num-input').value = ''
}

let input = document.getElementById('num-input')
let inputValue = NaN

input.onfocus = function() {
    if (document.getElementById('error')){
        document.getElementById('error').remove()
    }
    if(document.getElementById('price-span')){
        document.getElementById('price-span').style.display = 'none'
    }
    input.style.color = 'black'
    input.style.border = '3px solid green'
    
}

input.addEventListener("focusout", function(){
    input.style.border = 'none'
    inputValue = input.value
    
    if ( (input.value < 0 && !document.getElementById('error')) || isNaN(parseInt(input.value))){
        let error = document.createElement('p')
        error.id = 'error'
        error.style.color = 'red'
        error.textContent = 'Please enter correct price'
        input.style.border = '3px solid red'
        document.getElementsByClassName('price-container')[0].appendChild(error)
    }
    else{
        let priceSpan = document.getElementById('price-span')
        priceSpan.style.display = 'flex'
        input.style.color = 'green'
        document.getElementById('span-text').textContent = `Current price: ${inputValue}`
    }

});