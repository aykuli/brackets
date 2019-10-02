module.exports = function check(str, bracketsConfig) {
    let stack = [str[0]];
    let res = true;

    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                if (
                    stack[stack.length - 1] == bracketsConfig[j][1] &&
                    stack[stack.length - 1] == bracketsConfig[j][0]
                ) {
                    stack.pop();
                } else {
                    stack.push(str[i]);
                }
            } else if (str[i] == bracketsConfig[j][1]) {
                if (stack[stack.length - 1] == bracketsConfig[j][0]) {
                    stack.pop();
                } else {
                    stack.push(str[i]);
                }
            }
        }
    }
    if (stack.length == 0) {
        res = true;
    } else {
        res = false;
    }

    return res;
};
