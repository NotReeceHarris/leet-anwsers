// https://leetcode.com/problems/evaluate-reverse-polish-notation

function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let num2 = stack.pop() as number;
            let num1 = stack.pop() as number;
            switch (token) {
                case "+":
                    stack.push(num1 + num2);
                    break;
                case "-":
                    stack.push(num1 - num2);
                    break;
                case "*":
                    stack.push(num1 * num2);
                    break;
                case "/":
                    stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop() as number;
}