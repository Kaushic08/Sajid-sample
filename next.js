/**
 * /D:/Sajid-sample/next.js
 * Small utility: compute Fibonacci sequence and offer CLI usage.
 */

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const seq = [0, 1];
    for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
    return seq;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

module.exports = { fibonacci, sum };

/* CLI: node next.js 10 */
if (require.main === module) {
    const n = Math.max(0, parseInt(process.argv[2], 10) || 10);
    const seq = fibonacci(n);
    console.log(`Fibonacci (${n}):`, seq);
    console.log('Sum:', sum(seq));
} add .Math