let currentStep = 0; // Track current step in profile building process
let progress = 0; // Track overall progress percentage

function submitPrompt() {
    const inputField = document.getElementById('input-field');
    const userInput = inputField.value.trim();
    inputField.value = ''; // Clear input field

    switch (currentStep) {
        case 0: // Name input
            document.getElementById('user-name').textContent = userInput;
            progress += 10; // Increment by 10% for name
            break;
        case 1: // Email input
            document.getElementById('user-surname').textContent = userInput;
            progress += 10; // Increment by 10% for email
            break;
        case 2: // Surname input
            document.getElementById('user-age').textContent = userInput;
            progress += 10; // Increment by 10% for surname
            break;
        case 3: // Surname input
            document.getElementById('user-gender').textContent = userInput;
            progress += 10; // Increment by 10% for surname
            break;
        case 4: // Gender input
            document.getElementById('campus-name').textContent = userInput;
            progress += 10; // Increment by 10% for gender
            break;
        case 5: // Gender input
            document.getElementById('user-assignment-type').textContent = userInput;
            progress += 10; // Increment by 10% for gender
            break;
        case 6: // Gender input
            document.getElementById('user-highest-degree:').textContent = userInput;
            progress += 10; // Increment by 10% for gender
            break;
        case 7: // Gender input
            document.getElementById('user-country:').textContent = userInput;
            progress += 10; // Increment by 10% for gender
            break;
        case 8: // Campus name input
            document.getElementById('user-email').textContent = userInput;
            progress += 10; // Increment by 10% for campus name
            break;
        case 9: // Gender input
            document.getElementById('contact-number').textContent = userInput;
            progress += 10; // Increment by 10% for gender
            break; 
        
       
    }

    updateProgress();
    currentStep++;

    if (currentStep === 11) {
        // Hide prompt container when all steps are completed
        document.getElementById('prompt-container').style.display = 'none';
    } else {
        updatePrompt(currentStep);
    }
}

function updatePrompt(step) {
    const promptDescription = document.getElementById('prompt-description');
    const inputField = document.getElementById('input-field');
    switch (step) {
        case 1:
            promptDescription.textContent = 'Enter your surname:';
            inputField.setAttribute('type', 'text');
            break;
        case 2:
            promptDescription.textContent = 'Enter your age:';
            inputField.setAttribute('type', 'text');
            break;
        case 3:
            promptDescription.textContent = 'Enter your gender:';
            inputField.setAttribute('type', 'text');
            break;       
        case 4:
            promptDescription.textContent = 'Enter your campus name:';
            inputField.setAttribute('type', 'text');
            break;
        case 5:
            promptDescription.textContent = 'Enter your assignment type:';
            inputField.setAttribute('type', 'text');
            break;
        case 6:
            promptDescription.textContent = 'Enter your highest degree:';
            inputField.setAttribute('type', 'text');
            break;
        case 7:
            promptDescription.textContent = 'Enter your country:';
            inputField.setAttribute('type', 'text');
            break;
        case 8:
            promptDescription.textContent = 'Enter your email:';
            inputField.setAttribute('type', 'email');
            break; 
        case 9:
            promptDescription.textContent = 'Enter your Contact Number:';
            inputField.setAttribute('type', 'text');
            break;    
    

    }
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    progressBar.style.width = progress + '%';
    progressPercent.textContent = progress + '%';
}
