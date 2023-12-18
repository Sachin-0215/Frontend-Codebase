Promise.resolve("foo")
    //1. Recieve "foo", concatenate "bar" to it, and resolve that to the next then

    .then(
        (string) => new Promise((resolve, reject) => {
            setTimeout(() => {
                string += "bar";
                resolve(string);
            }, 500);
        }),
    )

    /*2. Recieve "foobar ",register a callback function to work on that string and print it to the console, but not before returning the unworked on the string to the next then
    */

    .then
    ((string) => {
        setTimeout(() => {
            string += "baz";
            console.log(string);//foobarbaz
        }, 500);
        return string;
    })

    //3. print helpfull messages about how the code in this section will be rrun before the string is actually procvessed by the mocked
    // synchronus code in the previous then block.
    .then((string) => {
        console.log("Last then: oops ... didn't bother to instantiate and return a promise in the prior then so the sequence may",string);


        //Note that 'string' will not have the 'baz ' bit of it at this point .This is
        //because we mocked that to happen asynchronously with a setTimeout function
        console.log(string);
    });

//logs in order:
// Last then: oops ... didn't bother to instantiate and return a promise in the prior then so the sequence may
// foobar
// foobarbaz



/**
{
    value : "foo"
    state : fullfilled,
    onfullfillment : [p1],
    onReject  : []
}
{
    value : undefined
    state : pending,
    onfullfillment : [p2],
    onReject  : []
}
{
    value : undefined
    state : pending,
    onfullfillment : [p2],
    onReject  : []
}

 */