const DOMSelectors = {
    form: document.querySelector("form"),
    input: document.querySelector("#input"),
    button1: document.querySelector("#button1"),
    button2: document.querySelector("#button2"),
    button3: document.querySelector("#button3"),
    button4: document.querySelector(".button4"),
    gallery: document.querySelector(".gallery"),
    textbox: document.querySelector(".textbox")
};

const awesome = []

function text(input){
    awesome.push(input)
    document.querySelector(".gallery").insertAdjacentHTML(
        "beforeend",
        `<div class="textbox">
        <img src="albert.jpg" alt="smart" class="smart">
        <button input="submit" type="text" class="button4">Delete Me!</button>
        <p>${input}</p>
       </div>`
    );
    DOMSelectors.input.value = "";
    console.log(DOMSelectors.button4)
}

DOMSelectors.button1.addEventListener("click", function(event){
    var input = DOMSelectors.input.value
    event.preventDefault();
    text(input);
    addList();
   
});

DOMSelectors.button2.addEventListener("click", () => {
    document.location.reload();
  });

DOMSelectors.button3.addEventListener("click", function(event){
    event.preventDefault();
    clearLast()
});

function addList(){
    const buttons = document.querySelectorAll('.button4')
    buttons.forEach((butt)=>{
        butt.addEventListener('click', function(e){
            butt.parentElement.remove();
            console.log(buttons)
        })
    })

}

function clearLast(){
        x = 0
        const tables = document.getElementsByClassName("textbox");
        const arr = Array.from(tables)
        console.log(arr)
        arr.forEach(div => x = x + 1)
        console.log(x)
        var firstTable = tables.item(x-1);
        console.log(firstTable)
        firstTable.remove()
    }