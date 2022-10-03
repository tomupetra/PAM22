function main(){
    console.log("M");
    setTimeout(
        function show(){
            console.log("N");
        }
    ,0);

    console.log("O");
}

main();