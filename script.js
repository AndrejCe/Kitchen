const ENDPOINT = 'https://api.github.com/users';
const menu = "https://telegra.ph/file/30b7af49461922e80461c.jpg";
const atmosfera = 'https://telegra.ph/Atmosfera-04-08';
const map = '';




const element = document.getElementById("btn");
element.addEventListener("click", myFunction1);


function myFunction1() {
    getText(ENDPOINT);
    let text = document.getElementById("message").innerText;
    document.getElementById("message").innerText = null;
    element.remove();
    async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text()
        const obj = JSON.parse(myText);
        // Create an "li" node:
        const node = document.createElement("li");

        //     // Create a text node:
        const textnode = document.createTextNode('Меню 1');

        //     // Append the text node to the "li" node:
        node.appendChild(textnode);

        //     // Append the "li" node to the list:
        document.getElementById("output").appendChild(node);


        var x = document.createElement("img");
        x.setAttribute("src", "https://telegra.ph/file/30b7af49461922e80461c.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Menu1");
        document.getElementById("output").appendChild(x);

    }
}