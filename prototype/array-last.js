// LeetCode: Array.prototype.last()
// https://leetcode.com/problems/array-prototype-last/
// Difficulty: Easy

/**
 * Enhances all arrays to support .last() method.
 * Returns the last element if present, else -1.
 */
Array.prototype.last = function() {
    if (this.length === 0) return -1;
    return this[this.length - 1];
};

// Example Usage:
console.log([null, {}, 3].last()); // 3
console.log([].last());            // -1

