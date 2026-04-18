function submitVote(){

    const selectedOption = document.querySelector('input[name="poll"]:checked');

    if(selectedOption){
        alert("Please select an option");
        return;
    }
}