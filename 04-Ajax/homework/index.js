let lista = $("#lista");

$("#boton").click(() => {
    $.get("http://localhost:5000/amigos/", function(data){
            lista.empty();
            for(let value of data){
                let newElement = `<li>${value.name}</li>`
                lista.append(newElement);
            }
        
    });
});

let valorInput = $("#input");
let amigoSearch = $("#amigo");

$("#search").click(function(){
    //console.log(valorInput[0].value)
    if (valorInput[0].value !== "") {
        $.get("http://localhost:5000/amigos/"+valorInput[0].value, function(data){
            amigoSearch[0].innerHTML = data.name;
        })
    }
    valorInput[0].value = "";
    amigoSearch[0].innerHTML = " ";
})

let valueDelete = $("#inputDelete");

$("#delete").click(function(){
    if (valueDelete[0].value === "") {
        return alert("escribga algo")
    }
    $.ajax({
        url: `http://localhost:5000/amigos/${valueDelete[0].value}`,
        type: 'DELETE',
        success: function(data) {
            console.log(data)
            if (data.length > 0) {
                $("#success").text(`amigo numero ${valueDelete[0].value} fue eliminado con exito`);
            }
            valueDelete[0].value = ""
            $("#boton").click();
        }
    });
})