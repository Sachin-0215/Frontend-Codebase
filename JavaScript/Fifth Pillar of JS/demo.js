async function fun() {
    return 10;
}

fun();

/*
> async function fun() {
...     return 10;
... }

undefined
>
> fun();
Promise {<fulfilled>: 10}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]]  : 10
*/