// 1. Посчитать количество гласных и согласных в строке

const btn = document.querySelector(`button`);

btn.addEventListener("click", ()=>{
    const inp = document.querySelector(`input`).value;
    const glas = document.querySelector(`.glas`);
    const soglas = document.querySelector(`.soglas`);


    const strGlas = "aiueoy";
    let countGlas =0;
    for(let i =0; i<inp.length; i++){
        if(strGlas.includes(inp[i])){
            countGlas += 1;
        }
    }
    const countSoglas = inp.length - countGlas;
    glas.innerHTML = `количество гласных: ${countGlas}`;
    soglas.innerHTML = `количество согласных: ${countSoglas}`;
})