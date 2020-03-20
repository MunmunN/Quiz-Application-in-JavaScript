var q=document.querySelector("#question");
var b1=document.querySelector("#btn1");
var b2=document.querySelector("#btn2");
var b3=document.querySelector("#btn3");
var b4=document.querySelector("#btn4");
var b1=document.querySelector("#btn1");
var s=document.querySelector("#score");
var p=document.querySelector("#progress");
//instead i can use document.getElementById('#id')
var question_array=[{
  //first question object
  question:"'Free throw' is associated with",
  a:"Basket Ball",
  b:"Foot ball",
  c:"Volley Ball",
  d:"Cricket",
  answer:"a",


},
{
question:"The term 'Butterfly Stoke' is referred to in which sport?",
a:"Tennis",
b:"Swimming",
c:"Volley Ball",
d:"Wrestling",
answer:"b",
},
{
  question:"In which game the term 'Putting' is used?",
  a:"Hockey",
  b:"Chess",
  c:"Golf",
  d:"Billiards",
  answer:"c",
}

];
var i=0;
var score=0;
increase();
//function for changing the questions
function increase(){
  if(i<3){
    q.innerHTML=question_array[i].question;
    b1.innerHTML=question_array[i].a;
    b2.innerHTML=question_array[i].b;
    b3.innerHTML=question_array[i].c;
    b4.innerHTML=question_array[i].d;
    i++;

  }
  else{
    s.innerHTML="Your score :"+score;
    if(score==3){
      var image=document.createElement('img');
      image.src="image/trophy.png"
      document.getElementById("mydivid").appendChild(image);
    }
  }
  p.innerHTML=i+" of "+question_array.length;

}
//function for Score j is option name
function check(j){
  if(question_array[i-1].answer==j){
    score++;

  }
}
