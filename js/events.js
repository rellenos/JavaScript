function canviColor() {
    if (document.getElementById("cos").style.backgroundColor == "rgb(206, 61, 181)") {
        console.log("blanc");
        document.getElementById("cos").style.backgroundColor = "#FFFFFF";
    }
    else {
        console.log("fucsia");
        document.getElementById("cos").style.backgroundColor = "rgb(206, 61, 181)";
    }
}