
function generate(){
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data.results[0] );
      $("#name").text("Name: \t"+ data.results[0].name.title +" "+ data.results[0].name.first+" " + data.results[0].name.last); 
      $("#age").text("Age: \t"+data.results[0].dob.age);
      $("#gender").text("Gender: \t"+data.results[0].gender);
      $("#dob").text("Date-of-Birth: \t"+data.results[0].dob.date);
      $("#email").text("Email: \t"+data.results[0].email);
      $("#username").text("Username: \t"+data.results[0].login.username);
      $("#password").text("Password: \t"+data.results[0].login.password);
      $("#location").text("Location: \t"+data.results[0].location.state+", "+data.results[0].location.country);
      $("#phone").text("Mobile: \t"+data.results[0].cell);
      document.querySelector("#img").src = data.results[0].picture.large;
    }
  });
}  
      