let counterValue = 0;

function updateCounter(value) {
    document.getElementById('result').innerText = value;
}

function increment() {
    counterValue++;
    updateCounter(counterValue);
}

function decrement() {
    counterValue--;
    updateCounter(counterValue);
}

function resetCounter() {
    counterValue = 0;
    updateCounter(counterValue);
}
