let desconto = prompt("Informe o  codigo de desconto");


switch (desconto) {
  case "DESC1":
    alert("05% de desconto");
    alert("De R$1000 pra R$950");
    break;

  case "DESC2":
    alert("10% de desconto");
    alert("De R$1000 pra R$900");

    break;

  case "DESC3":
    alert("15% de desconto");
    alert("De R$1000 pra R$850");
    break;

  case "DESC4":
    alert("20% de desconto");
    alert("De R$1000 pra R$800");    break;

  case "DESC5":
    alert("25% de desconto");
    alert("De R$1000 pra R$750");
    
    break;


  default:
    alert("Codigo invalido");
    break;
}
