$(function(){
    function quiz(question, choice, answer){
        this.question = question;
        this.choice = choice;
        this.answer = answer;
    }

    const title = "Auto Trivia"
    const totalTimer = 60;
    const nextTimer = 3;
    const q1 = new quiz("Which vehicle model is a honda?", ["focus","sentra","corolla","civic"], 4);
    const q2 = new quiz("Who made the GTR aka Godzilla?", ["Ford","Nissan","Honda","Dodge"], 2);
    const q3 = new quiz("What was Keichi Tsuchiyas (drift king) favorite car?", ["S2000","GTR","Corolla","Civic Type R"], 3);
    const allQuiz = quiz.length;
    console.log(quiz.length);
    let incorrectAnswer = 0;
    let correctAnswer = 0;
    let unAwnswered = 0;
    
    $('.title').text(title);

    //console.log(q1.choice[0]);
    var startTitle = "<h3 id=\"question\">Are you ready to start the auto quiz?</h3>";
    var spacebr = "<br><br>";
    var startButton = "<button type=\"button\" id=\"startbut\" class=\"btn btn-outline-success col-lg-8\">Lets Begin!</button>";
    $('#quiz').append(startTitle,spacebr,startButton);

    startQuiz();


    //functions
    function startQuiz(){
        
        $('#startbut').click(function(){
            $('#quiz').empty();
            buildQuestion(q1);
            console.log(q1);
        });
    }

    function buildQuestion(q){
        var title = "<h3 id=\"question\">"+ q.question +"</h3>";
        var answers=
        `<ul>
            ${q.choice.map(e => {
                console.log(e);
                return `<li class="answers"><button type="button" class="btn btn-outline-secondary col-lg-8">${e}</button></li>`
            })}
          
        </ul>`;

        $('#quiz').append(title, answers);

        
    }
        //<li class="answers"><button type="button" class="btn btn-outline-secondary col-lg-8">Jenny</button></li>
        //<li class="answers"><button type="button" class="btn btn-outline-secondary col-lg-8">Winfield</button></li>
        //<li class="answers"><button type="button" class="btn btn-outline-secondary col-lg-8">Dimitri</button></li>
        //<li class="answers"><button type="button" class="btn btn-outline-secondary col-lg-8">Darius</button></li>

});