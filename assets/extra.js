console.log("ok !");

function printdoc(obj) {
    console.log(obj);
}
function imprime(obj) {
    document.write(obj);
}
function imprimeobj(obj) {
    resu=parseJSON(obj);
    document.write(resu);
}
function parseJSON(obj) {
var parsedData = '';
for(var i in obj) {
 if (typeof obj[i] == 'object') {
     parsedData += parseJSON(obj[i]);
 }else {
     parsedData += i +' : '+ obj[i];
 }//end if
 parsedData += '\n';
}//end for
return parsedData;
}//end function


