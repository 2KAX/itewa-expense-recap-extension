const goToItewaButton = document.getElementById("goToItewaButton");

goToItewaButton.addEventListener("click", () => {
    chrome.tabs.create({
        url: "https://itewa.takima.io/expenses"
    });
});