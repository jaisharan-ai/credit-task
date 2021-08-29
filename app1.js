
const cars = JSON.parse(localStorage.getItem('cars')) ;
cars.push({"color": "grey",
      "type": "hyundai i20",
      "registration": new Date('2018-03-05'),
      "capacity": 5});
cars.push({"color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7});
cars.push({"color": "grey",
    "type": "hyundai i20",
    "registration": new Date('2018-03-05'),
    "capacity": 5});
localStorage.setItem('cars', JSON.stringify(cars));
function login() {

    if ($("#username").val() == "jaicoolgo@gmail.com" && $("#password").val() == "password") {
    
      alert("welcome jai");
      ('#car tbody').append(`
      <tr>
        <td>Name</td>
        <td>${cars[0].color}</td>
      </tr>`
    );
      
    } 
    else if ($("#username").val() == "kishore1@gmail.com" && $("#password").val() == "password") {
      alert("welcome kishore");
      ('#car tbody').append(`
      <tr>
        <td>Name</td>
        <td>${cars[1].color}</td>
      </tr>`
    );
     
    } 
   else if ($("#username").val() == "ram@gmail.com" && $("#password").val() == "password") {
    alert("welcome ram");
    ('#car tbody').append(`
    <tr>
      <td>Name</td>
      <td>${cars[2].color}</td>
    </tr>`
  );
    
    } 
    else {
      alert("You are not a valid user");
      
    }
    location.href('/');
    
   
  }
