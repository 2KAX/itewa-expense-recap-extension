const ITEWA_EXPENSE_PAGE_URL = "https://itewa.takima.io/expenses"
const goToItewaButton = document.getElementById("goToItewaButton");
const mailGenerationPage = document.getElementById("mailGenerationPage");

document.addEventListener("DOMContentLoaded", queryTabsAndShowDynamicContent);

goToItewaButton.addEventListener("click", openItewaExpenseTab);

function queryTabsAndShowDynamicContent() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        getCurrentTabAndShowDynamicContent(tabs)
    });
}

function getCurrentTabAndShowDynamicContent(tabs) {
    const currentTabUrl = tabs[0].url;
    if(currentTabUrl === ITEWA_EXPENSE_PAGE_URL){
        showMailGenerationPage()
    } else {
        showGoToItewaPage()
    }
}

function showMailGenerationPage() {
    console.log("You are on the expense page")
    goToItewaButton.style.display = "none";
    mailGenerationPage.style.display = "flex";
}

function showGoToItewaPage() {
    console.log("You are NOT on the expense page")
    goToItewaButton.style.display = "inline-block";
    mailGenerationPage.style.display = "none";
}

function openItewaExpenseTab() {
    chrome.tabs.create({
        url: ITEWA_EXPENSE_PAGE_URL
    });
}