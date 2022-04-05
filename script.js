//<tr> <td>mo</td> <td>20</td> <td>200</td> <td>4000</td></tr>
function inserer(){
    var row = document.createElement("tr");
   ("tbody");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    var quantite = document.getElementById("quantite").value;
    var prix = document.getElementById("prix").value;
    cell1.innerHTML= document.getElementById("item").value;
    cell2.innerHTML= quantite;
    cell3.innerHTML= prix;
    var montant = quantite * prix
    cell4.innerHTML= montant;
    
    
    
var table = document.getElementById("table007");
table.appendChild(row);
}

function supprimer(){
    var i = prompt("entrez l'index du row");
    document.getElementsByTagName("tr")[i].remove();
}

function foot (){
    

}