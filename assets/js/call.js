const callBtns = document.querySelectorAll(".call-btn");

for (const callBtn of callBtns){
    callBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const parent = event.currentTarget.parentElement;
        const childDiv = parent.querySelector('.student-call-details');
        if(childDiv.style.display === "flex"){
            childDiv.style.display = "none";
        }else{
            childDiv.style.display = "flex";
        }
    });
};