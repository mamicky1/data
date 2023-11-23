function findDistinctSum(set1, set2) {
    // Combine both sets into a single array
    const combinedArray = [...set1, ...set2];

    // Use a Set to store distinct elements
    const distinctElements = new Set(combinedArray);

    // Calculate the sum of distinct elements
    const sum = Array.from(distinctElements).reduce((acc, num) => acc + num, 0);

    return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = findDistinctSum(set1, set2);
console.log("Output:", result); // Output: 13
