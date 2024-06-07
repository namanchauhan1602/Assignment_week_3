// This is anexample of code using callback
/* function fetchData(url, callback) {
    setTimeout(() => {
        if (url === "valid-url") {
            callback(null, { data: "Some data" });
        } else {
            callback("Error: Invalid URL", null);
        }
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        if (data) {
            callback(null, `Processed ${data.data}`);
        } else {
            callback("Error: No data to process", null);
        }
    }, 1000);
}

// Using the functions with callbacks
fetchData("valid-url", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error(err);
            } else {
                console.log(processedData);
            }
        });
    }
});
 */

// This is an example of code that uses promisis ans Async/Await

function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "valid-url") {
                resolve({ data: "Some data" });
            } else {
                reject("Error: Invalid URL");
            }
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(`Processed ${data.data}`);
            } else {
                reject("Error: No data to process");
            }
        }, 1000);
    });
}

async function main() {
    try {
        const data = await fetchData("valid-url");
        const processedData = await processData(data);
        console.log(processedData);
    } catch (err) {
        console.error(err);
    }
}

main();
