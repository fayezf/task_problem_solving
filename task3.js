function mostFrequentElement(arr) {
    const frequency = {};
    arr.find(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });
    let mostFrequent = arr[0];
    let maxFrequency = 0;

    for (const item in frequency) {
        if (frequency[item] > maxFrequency) {
            mostFrequent = item;
            maxFrequency = frequency[item];
        }
    }

    return mostFrequent;
}

console.log(mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]))
