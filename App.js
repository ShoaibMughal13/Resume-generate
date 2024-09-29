function generateCV() {
    // Retrieve values from input fields
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const skills = document.getElementById('skills').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const experience = document.getElementById('experience').value;

    // Check if all fields are filled
    if (!name || !fatherName || !dob || !email || !phone || !address || !degree || !institution || !year || !skills || !company || !role || !experience) {
        alert("Please fill all fields before submitting.");
        return; // Exit the function if any field is empty
    }

    // Populate CV display
    document.getElementById('cvName').textContent = name;
    document.getElementById('cvFatherName').textContent = fatherName;
    document.getElementById('cvDob').textContent = dob;
    document.getElementById('cvEmail').textContent = email;
    document.getElementById('cvPhone').textContent = phone;
    document.getElementById('cvAddress').textContent = address;
    document.getElementById('cvDegree').textContent = degree;
    document.getElementById('cvInstitution').textContent = institution;
    document.getElementById('cvYear').textContent = year;
    document.getElementById('cvSkills').textContent = skills;
    document.getElementById('cvCompany').textContent = company;
    document.getElementById('cvRole').textContent = role;
    document.getElementById('cvExperience').textContent = experience;

    // Display the uploaded profile picture
    const profilePicInput = document.getElementById('profilePic');
    if (profilePicInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function() {
            const cvDisplayPicture = document.getElementById('cvDisplayPicture');
            cvDisplayPicture.src = reader.result;
            cvDisplayPicture.style.display = 'block'; // Show the image in CV
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    // Show the CV display section
    document.getElementById('cvTemplate').style.display = 'block';
}