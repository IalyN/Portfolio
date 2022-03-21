/*$(document).ready(function() {
    alert('Mande ve??');
    for (i=0;i<11;i++){
        if(i%2==0){
            alert(i+" est paire")
        }
        else{
            alert(i+" est impaire")
        }
    
    }
    });
    */
  /*  $(document).ready(function() { 
        $(".jquery").css({'color':'red','font-size':'40px'});
});*/

    function daty(){

        var today = new Date();
    
    var forme = {weekday:"long",year:"numeric",month:"long",day:"2-digit"};
    
    var date= today.toLocaleDateString("fr-FR", forme);
    
    var heure = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
    
    var dateEtHeure=date+" "+heure;
    
    var dateEtHeure=dateEtHeure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    
    const daty=document.getElementById('time').innerHTML=dateEtHeure;
    
    }
    
    setInterval('daty()',1000);


   