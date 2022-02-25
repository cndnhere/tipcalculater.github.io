function tipCalc()
{
    let amount=parseFloat(document.getElementById("amount").value) ;
    let service=document.getElementById("service").value;
    let nop=document.getElementById("nop").value;

    let tipamount = (amount * service)/100;
    let perpersonamount = tipamount/nop;
    

    document.getElementById("tipamount").innerText=tipamount.toFixed(2);
    document.getElementById("peramt").innerText = perpersonamount.toFixed(2);
}