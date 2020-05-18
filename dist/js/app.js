// Init Github class
const github = new Github;

//Init UI
const ui = new UI;

//Search
const searchUser = document.getElementById('searchUser');

//Search input event listener 
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;


    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear profile
        ui.clearProfile();
    }
});