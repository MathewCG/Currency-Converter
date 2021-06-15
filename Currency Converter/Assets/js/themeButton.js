const btn = document.getElementById("themeButton");
var btnState = false;

//changes body background
function bgColor(color) {
    document.body.style.backgroundColor = color;
}

//changes navbar border
function navBorder(nb) {
    document.getElementById("nav_bar").style.border = nb;
}

function navBg(bgColor) {
    document.getElementById("nav_bar").style.backgroundColor = bgColor;
}

function convertedCurrency(cCurrencyColor) {
    document.getElementById("converted").style.color = cCurrencyColor;
}


//function to CHANGE THEME below
function changeTheme() {
    const btn = document.getElementById("themeButton");
    btnState = !btnState;
    if (btnState) {
        bgColor('#575757');
        navBorder("none");
        navBg("rgba(6, 185, 96, 0.9)");
        convertedCurrency('#ffffff');

    } else {
        bgColor('#ffffff');
        navBorder('1px solid #000000');
        navBg("rgba(6, 185, 96, 0.5)");
        convertedCurrency('rgba(6, 185, 96, 0.9)');
    }
}