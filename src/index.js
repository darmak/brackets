module.exports = function check(str, bracketsConfig) {
    let mapArr = new Map(bracketsConfig);
    const arr = [];

    for (let char of str) {
        

        if (char === mapArr.get(arr[arr.length - 1])) arr.pop();
        else arr.push(char);
    }

    return !arr.length;
  
}
