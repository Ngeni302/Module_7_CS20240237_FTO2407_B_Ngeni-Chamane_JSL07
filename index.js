document.addEventListener('DOMContentLoaded', function () { //script runs after html document loaded
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none'; //initially the modal is hidden 
  
    cardForm.addEventListener('submit', function (e) { //form submission with the submit button
      e.preventDefault();
  
      // 🚨 Get input values (these are input fields retrieved with their ID's)
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput =document.getElementById('personalMessage') ; //gets the input element usind their ID's
      const courseNameInput =document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') { //
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = ` //
      <h1>Certificate of Achievement<h1>
      <p> This is to certify that <p>
      <h3>${studentName}</h3>       
      <p> has almost completed the <p>
      <h3>${courseName}<h3>
      <p> with sheer perseverance and tenacity.🥇<p>
      <img src="logo.png" alt="logo">
      <p> ${personalMessage}<p>

    
    `;
    
      //  Display the modal
      modal.style.display = 'block'; //modal is now made visible
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = ''; //input fields get cleared after submission
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () { //event listener to the close button to hide the modals when clicked
      modal.style.display ='none';

      
    });
  });
  