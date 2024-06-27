function customAlert(message) {
    var alertBox = document.getElementById("custom-alert-box");
    var alertMessage = document.getElementById("custom-alert-message");
    var closeButton = document.getElementsByClassName("custom-alert-close")[0];
    var progressBar = document.getElementById("custom-alert-progress-bar");

    alertMessage.innerText = message;
    alertBox.classList.remove("hidden");

    // Reset the progress bar
    progressBar.style.width = '100%';

    // Animate the progress bar
    setTimeout(function() {
        progressBar.style.width = '0';
    }, 10); // slight delay to trigger the transition

    // Close the alert when the close button is clicked
    closeButton.onclick = function() {
        alertBox.classList.add("hidden");
    };

    // Close the alert when clicking outside of the alert box
    window.onclick = function(event) {
        if (event.target === alertBox) {
            alertBox.classList.add("hidden");
        }
    };

    // Automatically hide the alert after 4 seconds
    setTimeout(function() {
        alertBox.classList.add("hidden");
    }, 4000);
}


document.addEventListener('DOMContentLoaded', () => {
    const checkbox1 = document.getElementById('styled-checkbox-1');
    const checkbox2 = document.getElementById('styled-checkbox-2');

    checkbox1.addEventListener('change', () => {
        if (checkbox1.checked) {
            checkbox2.checked = false;
        }
    });

    checkbox2.addEventListener('change', () => {
        if (checkbox2.checked) {
            checkbox1.checked = false;
        }
    });
});










let gameform = document.querySelector("#gameform")
let gamesubmit = document.querySelector("#getinputvalue")
console.log(gamesubmit);
gamesubmit.addEventListener('click', (e) => {
    e.preventDefault();

})





function randomcolorgenerator() {
    let color = "Red";
    let x = Math.round(Math.random());
    if (x == 0) {
        color = "Green";
        setTimeout(() => {
            customAlert("Green wins...")
        }, 1000);
    }
    else {
        color = "Red";
        setTimeout(() => {
            customAlert("Red wins...")
        }, 1000);

    }
}
// randomcolorgenerator()




// Profile Option Toggling
const profileimg = document.querySelector("#profile")
let submenu = document.getElementById("sub-menu");
submenu_open = false;
profileimg.addEventListener('click', (e) => {
    if (submenu_open) {
        submenu.classList.remove("open-menu");
        submenu_open = false;
        console.log(submenu_open);
    } else {
        submenu.classList.add("open-menu");
        submenu_open = true;
        console.log(submenu_open);
    }
})
function closeProfile(item) {
    item.addEventListener('click', (e) => {
        if (submenu_open) {
            submenu.classList.remove("open-menu");
            submenu_open = false;
            console.log(submenu_open);
        }
    })
}
const item1 = document.querySelector('#item1')
const item3 = document.querySelector('#item3')
const item4 = document.querySelector('#item4')
closeProfile(item1)
closeProfile(item3)
closeProfile(item4)


// Wallet

function currentBalance() {
    balance = document.querySelector("#price").innerHTML;
    // console.log(parseInt(balance));
    return parseInt(balance);
}
function updateBalance(balance) {
    document.querySelector("#price").innerHTML = balance;
}

let balance = 0;
let addmoney_active = false;
function initializeWallet() {
    const wallet = document.querySelector("#addmoney");
    wallet.addEventListener('click', function handleWalletClick(e) {
        balance = parseInt(document.querySelector("#price").innerHTML);
        if (!addmoney_active) {
            wallet.outerHTML = `
                <div class="walletonclick wallet-visible" id="walletonclick">
                    <form>
                        <h3 id="some">Wallet   ( Back )</h3>
                        <div class="upi">
                            <h4>Deposit money through UPI</h4>
                            <img src="UPI-Logo-vector.svg.webp" alt="">
                        </div>
                        <div class="amountclick">
                            <div class="buttonadd" id="add100">100</div>
                            <div class="buttonadd" id="add500">500</div>
                            <div class="buttonadd" id="add1000">1000</div>
                        </div>
                        <input type="number" name="" id="holyno" placeholder="0" value="0">
                        <h5>Minimum : ₹100 | Maximum : ₹49,999</h5>
                        <button id='sub'>Deposit</button>
                    </form>
                </div>`;
            addmoney_active = true;
            // Add money to place holder.
            function addx(addno) {
                let addx = document.querySelector(`#${addno}`)
                let addxvalue = document.getElementById(addno).innerHTML
                addx.addEventListener('click', (e) => {
                    document.querySelector("#holyno").value = `${addxvalue}`;
                })
            }
            addx("add100")
            addx("add500")
            addx("add1000")

            // add balance
            let sub = document.querySelector('#sub')
            sub.addEventListener('click', (e) => {
                e.preventDefault();
                customAlert("Amount added Succesfully.")
                const addamt = parseInt(document.querySelector("#holyno").value);
                console.log(addamt);
                console.log(typeof addamt);
                console.log(balance);
                console.log(typeof balance);
                balance = balance + addamt;
                console.log(balance);
            })
        }

        if (addmoney_active) {
            const some = document.querySelector('#some');
            some.addEventListener('click', function handleSomeClick(e) {
                const walletonclick = document.querySelector("#walletonclick");
                walletonclick.classList.add("wallet-hidden");
                // Wait for the fade-out animation to complete before changing the content
                setTimeout(() => {
                    walletonclick.outerHTML = `
                        <div class="wallet" id="addmoney">
                            &nbsp;<span class="BeforeLightblue">
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <div id="price">${balance}</div>
                            </span>
                            <button class="Lightblue">Wallet</button>
                        </div>`;
                    // updateBalance(balance);  
                    addmoney_active = false;
                    // Reinitialize the wallet to reattach the event listener
                    initializeWallet();
                }, 500); // This should match the duration of the fade-out animation
            });
        }
    });
}
initializeWallet();


balance = parseInt(document.querySelector("#price").innerHTML);
// betamount = document.querySelector("#betAmount");
let red = document.querySelector('#styled-checkbox-1-value').innerHTML
let green = document.querySelector('#styled-checkbox-2-value').innerHTML

let inputValue;
let game_decison;
let insufficient_balance;
function CheckBoxValue() {
    first = document.querySelector('#styled-checkbox-1')
    second = document.querySelector('#styled-checkbox-2')

    if (first.checked) {
        console.log(red);
        inputValue = red;
    }
    if (second.checked) {
        console.log(green);
        inputValue = green;
    }
}
function checkBalance(balance, betamount) {
    if (balance < betamount || betamount < 0 || balance < 0) {
        customAlert("Insufficient Balance");
        insufficient_balance= true;
    }else if(betamount == "" || isNaN(betamount)){
        customAlert("Enter amount Before Betting");
        insufficient_balance= true;
    }else{
        document.querySelector("#price").innerHTML=`${balance-betamount}`
        insufficient_balance= false;
    }
}
function RandomColor(){
    let x = Math.round(Math.random())
    if (x==0){
        return "Red"
    }else{
        return "Green"
    }
}
RandomColor()
function game(inputValue) {
    let x=RandomColor();
    if (inputValue==x) {
        console.log("You won");
        console.log("The random color was " +x);
        game_decison = 1;
    }else{
        console.log("Stay Down");
        console.log("The random color was " +x);
        game_decison = 0;
    }
}

getinputvalue = document.querySelector("#getinputvalue");
getinputvalue.addEventListener('click', (e) => {
    e.preventDefault();
    balance = parseInt(document.querySelector("#price").innerHTML);
    betamount = parseInt(document.querySelector("#betAmount").value);
    checkBalance(balance,betamount)
    CheckBoxValue();
    console.log();
    game(inputValue);
    if (insufficient_balance==false){
        if (game_decison==1){
            balance = parseInt(document.querySelector("#price").innerHTML)
            let won = balance + (betamount-(betamount*5/100))*2;
            document.querySelector("#price").innerHTML = `${won}`;
            customAlert("You Won");
        }else{
            customAlert("You Loose");
        }
    }
})


























