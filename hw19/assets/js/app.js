
let nowYear = +prompt ('Текущий год')

if ((nowYear % 4 === 0) && !(nowYear % 100 === 0))

alert ('Високосный');

else {
    alert ('Не високосный');
}