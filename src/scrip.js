function buttonVerify(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let cor = document.getElementById("cor").value;

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
    }
    
    switch(cor){
        case  "verde":
            document.body.backgroundcolor = "green";
        case  "azul":
            document.body.backgroundcolor = "blue";
        default:
            p = document.getElementById("alertCor");
            p.innerHTML = "Não foi inserido nenhuma cor";
    }   

}
