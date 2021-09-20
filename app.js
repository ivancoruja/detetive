let questions = document.getElementsByClassName("question");
let texts = document.getElementsByClassName("text");

let question1 = document.getElementById("question1");
let text1 = document.getElementById("text1");

let question2 = document.getElementById("question2");
let text2 = document.getElementById("text2");

let question3 = document.getElementById("question3");
let text3 = document.getElementById("text3");

let question4 = document.getElementById("question4");
let text4 = document.getElementById("text4");

let question5 = document.getElementById("question5");
let text5 = document.getElementById("text5");

function getAnswer() {
  let i = 0;
  let q = 0;
  let result = "";
  let button = document.getElementById("button");

  if (question1.checked == true){
    i++;
    text1.innerHTML = "Sim? Notável..."
  } else {
    text1.innerHTML = "Não? Achei que vocês talvez fossem íntimos..."
  }
  if (question2.checked == true){
    i++;
    text2.innerHTML = "Sim? Interessante..."
  } else {
    text2.innerHTML = "Não? Tem certeza?"
  }
  if (question3.checked == true){
    i++;
    text3.innerHTML = "Sim... Bem que eu desconfiava!"
  } else {
    text3.innerHTML = "Não? Está certo disso?"
  }
  if (question4.checked == true){
    i++;
    text4.innerHTML = "Sim! Não existe motivo melhor que o dinheiro!"
  } else {
    text4.innerHTML = "Não mesmo?"
  }
  if (question5.checked == true){
    i++;
    text5.innerHTML = "Sim? Eu sabia!"
  } else {
    text5.innerHTML = "Não? Temos que separar a vida pessoal do trabalho..."
  }

  if (i < 2) {
    result = "Obrigado. Considerando as provas do crime, você só pode ser... <h2>INOCENTE!</h2>"; 
  }
  else if (i == 2) {
    result = "Não posso esconder a verdade: você acaba de se tornar um(a)... <h2>SUSPEITO(A)!</h2>"; 
  }
  else if (i <= 4) {
    result = "Você é inteligente, mas também um(a)... <h2>CÚMPLICE!</h2>"; 
  }
  else {
    result = "Guardas, prendam-no(a) imediatamente. Aqui está nosso(a)... <h2>ASSASSINO(A)!</h2>";
  }

  for (; q < questions.length; q++) {
    questions[q].style.display = "none";
    texts[q].style.display = "block";
  }

  document.getElementById("result").innerHTML = result;
  document.getElementById("compute").style.display = "none";
  document.getElementById("again").style.display = "block";

}

  