
let m = +prompt ('Ваш вес (кг)')
let height = +prompt ('Ваш рост (м)')
let bodyMassIndex = m / (height **2);

if (bodyMassIndex < 16) {
    alert ('Выраженный дефицит массы тела')
}

if (bodyMassIndex > 16 && bodyMassIndex <= 18.5) {
    alert ('Недостаточная (дефицит) масса тела')
}

if (bodyMassIndex > 18.5 && bodyMassIndex <= 25)  {
    alert ('Норма')
}

if (bodyMassIndex > 25 && bodyMassIndex <= 30) {
    alert ('Избыточная масса тела (предожирение)')
}

if (bodyMassIndex > 30 && bodyMassIndex <= 35) {
    alert ('Ожирение 1 степени')
}

if (bodyMassIndex > 35 && bodyMassIndex <= 40) {
    alert ('Ожирение 2 степени')
}

if (bodyMassIndex > 40) {
    alert ('Ожирение 3 степени')
}


