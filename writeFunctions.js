const openConfirmation = () => {
    document.querySelector(".confirmation").style.display = "flex";
    document.querySelector(".writeContainer").style.visibility = "hidden";
}

const closeConfirmation = () => {
    document.querySelector(".confirmation").style.display = "none";
    document.querySelector(".writeContainer").style.visibility = "visible";
}