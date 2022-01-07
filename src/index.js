module.exports = function reverse (n) {
    let i = 0;
    let revStr = '';

    n = Math.abs(n);
    n = n.toString();

    while (i < n.length) {
        
        revStr = n[i] + revStr;
        i++;
    }

    return +revStr;
}
