
const searchInput = document.querySelector('#search-input');

document.querySelector('#search-input').oninput = function () {
    let val = this.value.toUpperCase().trim();
    let searchItems = document.querySelectorAll('#search-list li')
    
    if (val != "") {
        searchItems.forEach((elem) => {
            if (elem.innerText.toUpperCase().search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;            
            } else {
                elem.classList.remove('hide');
                let elText = elem.innerText
                elem.innerHTML = insertMark(elText
                    , elem.innerText.toUpperCase().search(val)
                    , val.length) 
                }
            })
        } else {
            searchItems.forEach((elem) => {
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;            
        })
        
    }
}

const insertMark = (text, startIndex, markLength ) => 
    text.slice(0, startIndex) + "<mark>" + 
    text.slice(startIndex, startIndex + markLength) + "</mark>" + text.slice(startIndex + markLength);


// document.body.insertAdjacentHTML("beforeend", insertMark("Test123123", 1, 6))