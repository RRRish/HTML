function calculateMonthlyFuelCost() {
    var mileage = parseFloat(document.getElementById("mileage").value);
    var speed = parseFloat(document.getElementById("speed").value);
    var fuelCost = parseFloat(document.getElementById("fuelCost").value);
    var distanceTravelPerDay = parseFloat(document.getElementById("distanceTravelPerDay").value);
    var daysInMonth = 30;
    
    var fuelConsumedPerDay = distanceTravelPerDay / mileage;
    var dailyFuelCost = fuelConsumedPerDay * fuelCost;
    var monthlyFuelCost = dailyFuelCost * daysInMonth;

    document.getElementById("result").innerHTML = "Monthly Fuel Cost: Rs. " + monthlyFuelCost.toFixed(2);
}
