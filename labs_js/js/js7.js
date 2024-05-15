function styleElement(element){
    let colorArray = ['red', 'blue', 'cyan', 'yellow', 'magenta', 'green']
    element.style.color = colorArray[Math.floor(Math.random(colorArray.length)*10)]
}

function setTimer(duration, displayTimer){
    setInterval(() => {
        document.getElementById(displayTimer).textContent = duration
        if (duration - 1 < 0){
            window.location.reload();
        }
        duration -= 1
    }, 1000)
}

function displayArray(array){
    let list = document.createElement('ul');
    list.id = "list";
      
    
    array.forEach((element, index) => {
        if(element instanceof Array){
            let li = document.createElement('li');
            li.innerHTML = 'Nested List'
            let nestedList = document.createElement('ul');
            element.forEach(item => {
                nestedList.innerHTML += `<li>${item}</li>`
            });
            li.append(nestedList)
            list.append(li)            
        }
        else if(typeof element == 'object'){
            let li = document.createElement('li');
            li.innerHTML = 'Nested Object'
            let nestedList = document.createElement('ul');
            for ([key, value] of Object.entries(element)){
                nestedList.innerHTML += `<li>${key}: ${value}</li>`
            }
            li.append(nestedList)
            list.append(li) 
        }
        else{
            list.innerHTML += `<li id='li-${index}'>${element}</li>`
        }
    });
    Array.from(list.querySelectorAll('li')).map(styleElement)

    document.body.appendChild(list);  
}

displayArray(['1', '2', ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'],'3', 'sea', {kiwi: 42, banana: 17, orange:15, apple: 78},'user', 23]);
setTimer(10, 'timer')

