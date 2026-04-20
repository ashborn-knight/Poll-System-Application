
const options = [
    {id:"option1",text:"Javascript",votes: 0},
    {id:"option2",text:"Pythoon",votes: 0},
    {id:"option3",text:"Java",votes: 0},
    {id:"option4",text:"C++",votes: 0}
]
function submitVote(){

    const selectedOption = document.querySelector('input[name="poll"]:checked');
    //console.log(selectedOption.value);

    if(!selectedOption){
        alert("Please select an option");
        return;
    }

    const optionId = selectedOption.value;
    const selectedOptionObj = options.find((option)=> option.id === optionId);

    if(selectedOptionObj){
        selectedOptionObj,votes++;
        cconsole.log(selectedOptionObj);
        displayResult();
    }


}

function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = " ";

    options.forEach((option)=>){
        const percentage = ((option.votes/ getTotalVotes()) * 100).toFixed(2) 
    }


}
function getTotalVotes(){
    return options.reduce((total,option)=> total + option.votes,0);

}