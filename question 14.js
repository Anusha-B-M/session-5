let promise = new Promise((res,rej) => {
    setTimeout(() => res("Resolved"),3000)
});
let result = await promise; 

alert(result);

