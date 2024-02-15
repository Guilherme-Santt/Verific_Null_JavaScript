function buttonVerify(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    if(nome == "" || nome == null){
        let p = document.getElementById("alert");
        p.innerHTML = "O campo nome não pode ser vazio";
        p.style.color = "red";
    }else if(senha == "" || senha == null){
        let p = document.getElementById("alert");
        p.innerHTML = "O campo senha não pode ser vazio";
        p.style.color = "red";
    }else if(cor == "" || cor == null){
        let p = document.getElementById("alert");
        p.innerHTML = "O campo cor não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("alert");
        p.innerHTML = "Enviado com sucesso";
        p.style.color = "green";
        switch(cor){
            case "verde":
                document.body.style.backgroundColor = "green";
                break;
            case "azul":
                break;
            default:
                p = document.getElementById("alertCor");
                document.body.style.backgroundColor = "white";
                p.innerHTML = "Cor inexistente";
                p.style.color = "black";
        }   
    }

}


function dye(){

    let day = new Date().getDay();
    console.log(date)

    switch(day){
        case 0:
            document.getElementById("dye").innerHTML = "Domingo";
            break;

        case 1:
            document.getElementById("dye").innerHTML = "Segunda-Feira";
            break;

        case 2:
            document.getElementById("dye").innerHTML = "Terça-Feira";
            break;
            
        case 3:
            document.getElementById("dye").innerHTML = "Quarta-Feira";
            break;
            
        case 4:
            document.getElementById("dye").innerHTML = "Quinta-Feira";
        break;

        case 5:
            document.getElementById("dye").innerHTML = "Sexta-Feira";
            break;
        
        case 6:
            document.getElementById("dye").innerHTML = "Sábado";
            break;

        default:
            document.getElementById("dye").innerHTML = "null"; 
            break;
    }
}



