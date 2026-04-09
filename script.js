   console.log("JS working");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // validation here
    const number = document.getElementById("mobilenumber").value;
    const pin = document.getElementById("pin").value;

    if (number && pin) {
        window.location.href = "home-page.html";
    }
});

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // validation here
    const number = document.getElementById("mobilenumber").value;
    const pin = document.getElementById("pin").value;

    if (number && pin) {
        window.location.href = "home-page.html";
    }
});

function goToAddMoney(){
     window.location.href = "add-money.html";


};

const form = document.querySelector("#addMoneyForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const bank1 = document.getElementById("accnt-num").value.trim();
        const accntNum = document.getElementById("pin").value.trim();
        const amntNum = document.getElementById("amnt").value.trim();
        const pinNum = document.getElementById("pin-num").value.trim();

        if (bank1 && accntNum && amntNum && pinNum) {
            alert("Money added successfully!");
        } else {
            alert("Invalid input");
        }
    });
}

function goToCashOut(){
        window.location.href = "cash-out.html";
}
document.addEventListener("DOMContentLoaded", () => {
    const form2 = document.querySelector("#cashoutform");

    if (form2) {
        form2.addEventListener("submit", function(e) {
            e.preventDefault();
            const bank2 = document.getElementById("bank").value.trim();
            const ammntNum2 = document.getElementById("amnt").value.trim();
            const pinnum34 = document.getElementById("pin-num").value.trim();

            if (bank2 && ammntNum2 && pinnum34) {
                alert("Cashed out successfully");
            } else {
                alert("Invalid input");
            }
        });
    }
});

function gotoTransfermoney(){
     window.location.href = "send-money.html"

}

document.addEventListener("DOMContentLoaded", () => {
    const form3 = document.querySelector("#sendmoneyform");

    if (form3) {
        form3.addEventListener("submit", function(e) {
            e.preventDefault();
            const bank2 = document.getElementById("bank").value.trim();
            const ammntNum2 = document.getElementById("amnt").value.trim();
            const pinnum34 = document.getElementById("pin-num").value.trim();

            if (bank2 && ammntNum2 && pinnum34) {
                alert("money sent successfully");
            } else {
                alert("Invalid input");
            }
        });
    }
});


function gotoBonus(){
         window.location.href = "bonus.html";

}

document.addEventListener("DOMContentLoaded", () => {
    const bonusForm = document.getElementById("bounsForm"); // matches HTML

    if (!bonusForm) {
        console.error("Form not found!");
        return;
    }

    bonusForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const bonus = document.getElementById("coupon-num")?.value.trim();

        if (bonus) {
            alert("Coupon applied successfully!");
        } else {
            alert("Invalid input");
        }
    });
});
function gotoPaybill(){
             window.location.href = "paybill.html";

}

document.addEventListener("DOMContentLoaded", () => {
    const form6 = document.querySelector("#paybillform");

    if (form6) {
        form6.addEventListener("submit", function(e) {
            e.preventDefault();
            const bank2 = document.getElementById("bank").value.trim();
               const billact= document.getElementById("pin").value.trim();
            const amnt = document.getElementById("amnt").value.trim();
            const pinnum34 = document.getElementById("pin-num").value.trim();

            if (bank2 &&amnt && pinnum34 && billact) {
                alert("payed bill sucessfully ");
            } else {
                alert("Invalid input");
            }
        });
    }
});

function gotoTransections(){

              window.location.href = "transections.html";

}
