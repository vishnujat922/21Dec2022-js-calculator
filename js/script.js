let string = ""
let btn = document.querySelectorAll(".button");
Array.from(button).forEach((button) => {
    button.addEventListener('click', () => {
        if (e.target.innerHTML == '=')
            string = eval(string);
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})