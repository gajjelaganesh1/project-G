function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if(isNaN(dob.getTime())) {
        document.getElementById('output').innerHTML = "Please enter a valid date.";
    }
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiffarence = today.getMonth() - dob.getMonth();

    if(monthDiffarence < 0 || (monthDiffarence === 0 && today.getDate() < dob.getDate() )) {
        age--;
    }

    document.getElementById('output').innerHTML = "You are " + age + "years old.";
}