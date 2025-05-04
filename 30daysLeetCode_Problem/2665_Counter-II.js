var createCounter = function(init) {
    const n = init;
    let obj ={
        increment(){
            return init += 1;

        },
        decrement(){
            return init -= 1;

        },
        reset(){
            return init = n;

        }
    }
    return obj;
};
