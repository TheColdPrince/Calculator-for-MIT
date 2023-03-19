let historybutton = document.getElementById('historybutton');
let history = document.getElementById('history');
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');

function showHistory() {
    let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let len = calcHistory.length;

    history.innerHTML = '';

    bar1.style.display = 'block';
    bar2.style.display = 'block';
    if (len === 0) {
        let historyItem = document.createElement('div');
        historyItem.innerHTML = "There's no history yet.";
        historyItem.className = 'historyelement his';
        historyItem.style.fontSize = '30px';
        history.appendChild(historyItem);
    } else {
        for (let index = len-1; index >=0; index--) {
            const element = calcHistory[index];
            let historyItem = document.createElement('div');
            historyItem.className = 'historyelement';
            historyItem.innerHTML = `${element.screenValue} =  ${element.result}`;
            history.appendChild(historyItem);
            if (index > 0) history.appendChild(document.createElement('hr'));
        }
    }
    history.style.display = 'block';
}

historybutton.addEventListener('click', showHistory);

function hide(){
    history.style.display = 'none';
    bar1.style.display = 'none';
    bar2.style.display = 'none';
}

bar1.addEventListener('click', hide);
bar2.addEventListener('click', hide);
