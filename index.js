function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    if (degree > 0) {
        return num * pow(num, degree - 1);
    }
    if (degree < 0) {
        return 1 / pow(num, -degree);
    }
}

const firstNumber = prompt("Введіть число");
const degree = prompt("Введіть ступінь(цілу)");
if (firstNumber === null || degree === null) {
    alert("ок...");
} else if (
    isNaN(firstNumber) ||
    isNaN(degree) ||
    !firstNumber.trim() ||
    !degree.trim() ||
    !Number.isInteger(+degree)
) {
    alert("error");
} else {
    alert(pow(+firstNumber, +degree));
}
