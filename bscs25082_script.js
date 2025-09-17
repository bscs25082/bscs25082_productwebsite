function showWelcome() 
{
    alert("Welcome to our website!")
}
function P1() 
{
    const stock = 
    {
        "P1": true,
    };
        if (stock["P1"]) {
            alert("Product " + "P1" + " in stock");
        } else {
            alert("Product " + "P1" + " out of stock");
        }
}
function P2() 
{
    const stock = 
    {
        "P2": true,
    };
        if (stock["P2"]) {
            alert("Product " + "P2" + " in stock");
        } else {
            alert("Product " + "P2" + " out of stock");
        }
}
function P3() 
{
    const stock = 
    {
        "P3": false,
    };
        if (stock["P3"]) {
            alert("Product " + "P3" + " in stock");
        } else {
            alert("Product " + "P3" + " out of stock");
        }
}
function P4() 
{
    const stock = 
    {
        "P4": true,
    };
        if (stock["P4"]) {
            alert("Product " + "P4" + " in stock");
        } else {
            alert("Product " + "P4" + " out of stock");
        }
}
function P5() 
{
    const stock = 
    {
        "P5": true,
    };
        if (stock["P5"]) {
            alert("Product " + "P5" + " in stock");
        } else {
            alert("Product " + "P5" + " out of stock");
        }
}



function validation() 
{
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") 
    {
        alert("fill all fields.");
        return false;
    }
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) 
    {
        alert("wrong email.");
        return false;
    }
    alert("submitted.");
    return true;
}
function sendMessage() 
{
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatLog = document.getElementById("chat-log");
  let userMsg = document.createElement("p");
  userMsg.className = "user";
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);
  let botMsg = document.createElement("p");
  botMsg.className = "bot";
  botMsg.textContent = "Bot: " + getBotResponse(input);
  chatLog.appendChild(botMsg);
  document.getElementById("user-input").value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}
