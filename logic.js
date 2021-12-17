
let ul = document.getElementById('ul')

let nextButton = document.getElementById('btnNext');
let quizbox = document.getElementById('questionBox')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')
let reset = document.getElementById('reset')





let app={
        questions:[
            {
                q:"Quelle est la devise de l'Olympique de Marseille",
                options: ['Droit au but !', 'A la victoire !', 'Toujours on gagne !', 'Tous pour un !'],
                answer:1
            },
            {
                q:"Quel est l'entraîneur actuel de Marseille",
                options: ['Laurent Blanc', 'José Anigo', 'Jorge Sampaoli', 'Zinedine Zidane'],
                answer:3
            }, 
            {
                q:"Quel joueur n'a jamais joué pour Marseille",
                options: ["Jean-Pierre Papin","Didier Deschamps", "Ronaldinho", "Chris Waddle"],
                answer:3
            },
            {
                q:"Comment s'appelle le stade où joue Marseille ?",
                options: ["Le Parc des Princes","Le Stade Vélodrome", "Le Stade Bollaert", "Le Stade Louis II"],
                answer:2
            },
                    
        ],
        
    
        index:0,

        

        load:function(){
            // load is a state, react to page states when the script executes
            // for example, here load executes the function when the page is loading
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Test finished!";
                reset.style.display = "block"
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function (){
            // next is also a state, it's a kind of an eventListener which would be directly rattached to the function
            this.index++; 
            // the index would increment by 1
            this.load();
            // the page will load
        },
        check: function(element){
            //
            let id = element.id.split('');
            // If ('') is used as separator, the string is split between words.
            if(id[id.length-1] == this.questions[this.index].answer){

                this.score++;
                element.className="correct";
                // add a green className in CSS
                this.scoreCard();
            }
            
            else{
                element.className="wrong";
                // add a red className in CSS
            }
        },
        

       

        preventClick:function(){
            // preventClick here is also a state which prevents the action of the element targeted au clic
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
                // the result is that we can't click on the children, poor children..
            }
        },
        allowClick:function(){
            //alloClick is also a state which allows the action..
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                // the style auto means "it's ok, you can click on the children"
                ul.children[i].className=''
            }
        },
        
        score:0,

        scoreCard:function(){
            // for states, the value of the state is the function
            scoreCard.innerHTML=this.score + "/" + this.questions.length;
            // that's would be written in the text on the screen, we could have used textContent
        }
}


window.load=app.load();
// window.onload or $(window).load() happens after all the content resources (images, etc) have been loaded.

function button(element){
    app.check(element);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

document.getElementById('reset').addEventListener('click', function(){
    window.location.reload();
    return false});

   
     