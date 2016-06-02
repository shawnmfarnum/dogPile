// $(document).ready(function(){
   //CRUD
   //C = create() for POST
   //R = read() for GET
   //U = update() for PUT
   //D = delete() for DELETE

   // function create(){
   //     $.ajax({
   //         method: "POST",
   //         data: dogs;
   //         url: "/dogs"
   //     }).then(function(response){
   //         read(); //GET
   //     });
   //     }

   var getDogs = function(){  //getDogs
         //$(".dataRowOne").remove();
       $.ajax({
             method: "GET",
             url: "/dogs"
       }).then(function(response){
           console.log(response);
           //console.log then I went into the server and right click to inspect then click on console
           //and start
             var dogs = response; //returns the object in its entirety
              for (var i = 0; i < dogs.length; i++){
                  //console.log(dogs[i].name);
                  //target the dataRowOne and append the following data:
                  $(".dataRowOne").append(`
                      <input value="`+ dogs[i].name +`" type="text" id="name"><br>
                       <input value="`+ dogs[i].breed +`" type="text" id="name"><br>
                       <input value="`+ dogs[i].toy +`" type="text" id="name">
                       `);

                 }
           });
   };
   //the code below is how we call a function in jQuery
   //the getDogs button is going to make it run the above function
   $("#getDogs").on("click", getDogs);


   // $('#subButton').on('click', function(){
   //     //getting the text from the html form
   //     var search = $("#inputText").val();
   //     //cleared out the search data
   //     $("..dogs").empty();
   //     getDogs(search);
   //     //search = "";
   // });



   // function update(){
   //     $.ajax({
   //     method: "PUT",
   //         data: dogs,
   //         id:  "/dogs:id",
   //         url: "/dogs"
   // }).then(function(response){
   //     read(); //GET
   // })


   // function delete(){
   //     $.ajax({
   //     method: "DELETE",
   //         id:"/dogs:id"
   //         }).then(function(response){
   //     read(); //GET
   //     })

   // }

   // });
