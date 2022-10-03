function p () {
    console.log("Di dalam Fungsi P")

    function q (){
        console.log("Di dalam Fungsi Q")

        function r(){
            console.log("Di dalam Fungsi R")
        }
        r();
    }
    q();
}
p();