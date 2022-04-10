function lengthConverter(source, val) {
    val = parseFloat(val)
    var inputCm = document.getElementById("InputCm");
    var inputInch = document.getElementById("InputInch");
    var inputMeter = document.getElementById("InputMeter");
    var inputKm = document.getElementById("InputKm");
    var inputMiles = document.getElementById("InputMiles");
    var inputFeet = document.getElementById("InputFeet");

    if (source == "InputCm") {
        inputInch.value = (val * 0.3937).toFixed(2);
        inputFeet.value = (val * 0.032808).toFixed(3);
        inputMeter.value = (val / 100).toFixed(3);
        inputKm.value = (val / 100000).toFixed(6);
        inputMiles.value = (val * 0.0000062137).toFixed(6);
    }

    if (source == "InputInch") {
        inputCm.value = (val / 0.3937).toFixed(2);
        inputFeet.value = (val * 0.083333).toFixed(3);
        inputMeter.value = (val / 39.370).toFixed(3);
        inputKm.value = (val / 39370).toFixed(6);
        inputMiles.value = (val * 0.000015783).toFixed(6);
    }

    if (source == "InputFeet") {
        inputCm.value = (val / 0.032808).toFixed(2);
        inputInch.value = (val * 12).toFixed(3);
        inputMeter.value = (val / 3.2808).toFixed(3);
        inputKm.value = (val / 3280.8).toFixed(6);
        inputMiles.value = (val * 0.00018939).toFixed(6);
    }

    if (source == "InputMeter") {
        inputCm.value = (val * 0.01).toFixed(2);
        inputInch.value = (val * 39.370).toFixed(3);
        inputFeet.value = (val * 3.2808).toFixed(3);
        inputKm.value = (val / 1000).toFixed(5);
        inputMiles.value = (val * 0.00062137).toFixed(6);
    }

    if (source == "InputKm") {
        inputCm.value = (val * 100000).toFixed(2);
        inputInch.value = (val * 39370).toFixed(3);
        inputMeter.value = (val * 1000).toFixed(3);
        inputFeet.value = (val * 3280.8).toFixed(6);
        inputMiles.value = (val * 0.62137).toFixed(2);
    }

    if (source == "InputMiles") {
        inputCm.value = (val / 0.0000062137).toFixed(2);
        inputInch.value = (val * 63360).toFixed(3);
        inputFeet.value = (val * 5280).toFixed(3);
        inputKm.value = (val / 0.62137).toFixed(5);
        inputMeter.value = (val * 0.00062137).toFixed(6);
    }

}