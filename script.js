document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("btn");
    const yourNameInput = document.getElementById("yourName");
    const crushNameInput = document.getElementById("crushName");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const yourName = yourNameInput.value.trim();
        const crushName = crushNameInput.value.trim();

        if (yourName === "" || crushName === "") {
            alert("Please fill in both input fields.");
            return;
        }

        const lovePercentage = calculateLove(yourName, crushName);
        displayResult(lovePercentage);
    });

    function calculateLove(yourName, crushName) {
        // Simple algorithm to calculate love percentage
        // You can replace this with a more sophisticated algorithm
        const lovePercentage = Math.random() * 100;
        return Math.floor(lovePercentage);
    }

    function displayResult(lovePercentage) {
        resultDiv =  alert("Its just me")
    
    }

    // if(lovePercentage <=50){
    // }
    // else{
    //     alert("You guys are good to go")
    // }
    // `<p>Your love percentage is: ${lovePercentage}%</p>`;
});

