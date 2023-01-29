function foo(){
    console.log("foo");
    var newbar = bar();
    return newbar;
}
function bar(){
    console.log("bar");
}
foo();