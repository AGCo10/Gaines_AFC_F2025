function wordCounter(input) {
    if (typeof input !== "string") return 0;
    if (input.trim() === "") return 0;
    // Not implemented for other cases yet.
    // Split the array across whitespaces.
    const words = input.trim().split(/\s+/);
    return words.length
}

module.exports = wordCounter;