// setTimeout(function () { console.log("hii") }, 1000);

/*

C:\Users\Dell\Pictures\Frontend\JavaScript\Fourth Pillar Of JS>node
Welcome to Node.js v18.13.0.
Type ".help" for more information.
> setTimeout(function () { console.log("hii") }, 1000);
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 4738,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 29,
  [Symbol(triggerId)]: 5
}
> hii


*/

function createPromise() {
    return new Promise(function execute(resolve, reject){
        let x = setTimeout(function giveValue() {
            return 2;
        }, 3000);
        if (x % 2 == 0) resolve("successfull");
        else { resolve("rejected"); }
    })
}

y = createPromise();

/*
undefined
> y = createPromise();
Promise {
  'successfull',
  [Symbol(async_id_symbol)]: 89,
  [Symbol(trigger_async_id_symbol)]: 5
}
>
*/