const questions= [
    {
        'que':'which of the following is a markup language',
        'a':'HTML',
        'b':'css',
        'c':'javascript',
        'd':'php',
        'correct':"a"
    },
    {
        'que':'what year was javascript launched',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':"b"
    },
    {
        'que':'what does css stand for',
        'a':'hypertext markup language',
        'b':'cascading style sheet',
        'c':'jason object notation',
        'd':'none of the above',
        'correct':"b",
    },
     {
        'que':'The latest HTML standard is',
        'a':'HTML 4.0',
        'b':'HTML 5.0',
        'c':'XML',
        'd':'SGML',
        'correct':"b",
    },
     {
        'que':'Identify the incorrect HTML tag among the following',
        'a':'<input>',
        'b':'<select>',
        'c':'<list>',
        'd':'<textarea',
        'correct':"c",
    }




]
let index =0;
let total = questions.length;
let right =0,wrong =0;
const quesBox = document.getElementById("quesBox")
const optionInputs =document.querySelectorAll('.options')
const loadquestion =() =>{
    if (index === total){
       return endquiz()
    }
    reset()
    const data =questions[index]
    quesBox.innerText =`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

    

}

const submitquiz =()=>{
    const data =questions[index];
    const ans =getAnswer()
    if (ans === data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;

        }
    )
}

const endquiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3> Thanku for  playing the quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}

loadquestion();