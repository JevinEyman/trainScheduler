
  // Initialized Firebase
  var config = {
    apiKey: "AIzaSyCMEEyjx9uHsDQCc0xRXUUlSRY4jy65xqs",
    authDomain: "myproject-3a18b.firebaseapp.com",
    databaseURL: "https://myproject-3a18b.firebaseio.com",
    projectId: "myproject-3a18b",
    storageBucket: "myproject-3a18b.appspot.com",
    messagingSenderId: "25084398622"
  };
  firebase.initializeApp(config);


  var database = firebase.database();



  //Button to add trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

  

  //set variables to hold user input values
  var trainName = $("#train-name-input").val();
  var trainDest = $("#destination-input").val();
  var firstTrain = $("#train-time-input").val();
  var trainFreq = $("#frequency-input").val();


  //temp object for holding train data
   var newTrain = {
    name: trainName,
    destination: trainDest,
    first: firstTrain,
    freq: trainFreq
  };

//uploads new train info to database
   database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.freq);

                  //this clears user input values
                  $("#train-name-input").val("");
                  $("#destination-input").val("");
                  $("#train-time-input").val("");
                  $("#frequency-input").val("");
});


  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().first;
  var trainFreq = childSnapshot.val().freq;



//adds new train data to the table. (Append data to the last child of the table body)
$("#train-table").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + firstTrain + "</td></tr>");

 };



























