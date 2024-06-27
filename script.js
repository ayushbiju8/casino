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


// Profile Option Toggling
const profileimg = document.querySelector("#profile")
let submenu = document.getElementById("sub-menu");
submenu_open = false;
profileimg.addEventListener('click',(e) => {
    if (submenu_open){
        submenu.classList.remove("open-menu");
        submenu_open=false;
        console.log(submenu_open);
    } else{
        submenu.classList.add("open-menu");
        submenu_open=true;
        console.log(submenu_open);
    }
})
function closeProfile(item){
    item.addEventListener('click',(e) => {
    if (submenu_open){
        submenu.classList.remove("open-menu");
        submenu_open=false;
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

function currentBalance(){
    balance = document.querySelector("#price").innerHTML;
    // console.log(parseInt(balance));
    return parseInt(balance);
}
function updateBalance(balance){
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
            function addx(addno){
                let addx = document.querySelector(`#${addno}`)
                let addxvalue = document.getElementById(addno).innerHTML
                addx.addEventListener('click',(e)=>{
                    document.querySelector("#holyno").value =`${addxvalue}`;
                })
            }
            addx("add100")
            addx("add500")
            addx("add1000")

            // add balance
            let sub = document.querySelector('#sub')
            sub.addEventListener('click',(e) => {
                e.preventDefault();
                customAlert("Amount added Succesfully.")
                const addamt = parseInt(document.querySelector("#holyno").value);
                console.log(addamt);
                console.log(typeof addamt);
                console.log(balance);
                console.log(typeof balance);
                balance = balance+addamt;
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










