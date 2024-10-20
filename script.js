document.getElementById("submit").addEventListener("click", calculatePrice);

function calculatePrice() {
    let basePrice = 100;

    let education = parseFloat(document.getElementById("education").value) || 1;
    let netWorth = parseFloat(document.getElementById("networth").value) || 1;
    let caste = parseInt(document.getElementById("caste").value) || 0;
    let age = parseFloat(document.querySelector('input[name="age"]:checked').value) || 1;

    let skills = 0;
    if (document.getElementById("instrument").checked) skills += 10;
    if (document.getElementById("cook").checked) skills += 20;
    if (document.getElementById("character").checked) skills += 15;
    if (document.getElementById("sing").checked) skills += 10;

    let reputationCoefficient = 1;
    if (document.getElementById("parentsAttitude").checked) reputationCoefficient *= 0.85;
    if (document.getElementById("characterGossip").checked) reputationCoefficient *= 0.9;
    if (document.getElementById("generalGossip").checked) basePrice -= 20;

    let finalPrice = basePrice * education * netWorth * age;
    finalPrice += caste + skills;
    finalPrice *= reputationCoefficient;

    document.getElementById("result").innerText = `Final Price: $${finalPrice.toFixed(2)}`;
}
