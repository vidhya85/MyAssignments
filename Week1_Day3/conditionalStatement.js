

function launchBrowser(browserName){
    if(browserName==='Chrome'){
        console.log("The browser is " + browserName);
            }
            else
                console.log("The browser is not Chrome")
                           
}
function runTests(testType){
    switch(testType){
        case "smoke":
        console.log("Smoke test")
        break;
        case "sanity":
        console.log("Sanity test")
        break;
        case "regression":
        console.log("Regression test")
        break;
        default:
        console.log("Smoke test")

        
    }
}
launchBrowser("Edge")
runTests()