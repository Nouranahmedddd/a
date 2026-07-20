function calculateShipping(weight) {
    return new Promise((resolve, reject) => {
        if (weight > 0) {
            const cost = weight * 5;
            resolve(`Shipping cost: ${cost}`);
        } else {
            reject("Invalid weight");
        }
    });
}

let weight = Number(prompt("Enter package weight:"));

calculateShipping(weight)
    .then((cost) => {
        console.log(cost);
    })
    .catch((error) => {
        console.log(error);
    });