const openMobileSearch = () => {
    document.querySelector(".searchMobile").style.display = "flex";
    document.querySelector(".searchMobileButton").style.display = "none";
    document.querySelector(".brandMobile").style.display = "none";
    document.querySelector(".navitagionMobileButton").style.display = "none";
}

const closeMobileSearch = () => {
    document.querySelector(".searchMobile").style.display = "none";
    document.querySelector(".searchMobileButton").style.display = "flex";
    document.querySelector(".brandMobile").style.display = "flex";
    document.querySelector(".navitagionMobileButton").style.display = "flex";
}

const openMobileNavigation = () => {
    document.querySelector(".navigationMobileContainer").style.display = "flex";
    document.querySelector(".searchMobileButton").style.display = "none";
    document.querySelector(".brandMobile").style.display = "none";
    document.querySelector(".navitagionMobileButton").style.display = "none";
}

const closeMobileNavigation = () => {
    document.querySelector(".navigationMobileContainer").style.display = "none";
    document.querySelector(".searchMobileButton").style.display = "flex";
    document.querySelector(".brandMobile").style.display = "flex";
    document.querySelector(".navitagionMobileButton").style.display = "flex";
}