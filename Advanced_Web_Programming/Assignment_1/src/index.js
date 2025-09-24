function isPalindrome(input) {
    // check if the input is a string
    if ((typeof input !== "string") || (input.length <= 1) || (arguments.length !== 1) || (input.trim() === "")) return false;
    // Check for Palindrome
    const result = input.toLowerCase()
        .split(/[^a-z0-9]+/)
        .join('');
    let k = 1;
    for (let i = 0; i < result.length; i++, k++) {
        if (result.charAt(i) !== (result.charAt(result.length-k))) {
            return false;
        }
    }

    // Remove Whitespaces
    // const words = input.trim().split(/\s+/);
    return true;
}

module.exports =
    isPalindrome;