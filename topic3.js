const cars = JSON.parse(localStorage.getItem('cars'))||[
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {"color": "grey",
    "type": "hyundai i20",
    "registration": new Date('2018-03-05'),
    "capacity": 5}
  ] ;





        function login() {
            if ($("#username").val() == "jaicoolgo@gmail.com" && $("#password").val() == "password") {  
                
                $("car tbody").append(`
                <tr>
                  <td>Name</td>
                  <td>${cars[1].color}</td>
                </tr>`);
            }
        
                else if ($("#username").val() == "ram@gmail.com" && $("#password").val() == "password")
                {
                    ('#car tbody').append(`
                <tr>
                  <td>Name</td>
                  <td>${cars[1].color}</td>
                </tr>`
              );}
                    else if ($("#username").val() == "k@gmail.com" && $("#password").val() == "password")
                    {
                        ('#car tbody').append(`
                        <tr>
                          <td>Name</td>
                          <td>${cars[1].color}</td>
                        </tr>`);
                    }

                        else{alert("user not found");}
                        location.href('/');
            }

        
    
    
