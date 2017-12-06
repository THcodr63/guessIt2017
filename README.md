<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Guess It Game|T.Hamilton</title>
    <link rel="stylesheet" href="assets/reset.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/style.css">
    <!-- Font -->
    <link href="https://fonts.googleapis.com/css?family=Creepster" rel="stylesheet">

</head>
<body>

<div class="container"> 
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <center><h1 class="display-3">Guess It!!</h1>
          <p class="lead">Horror movie monster!</p></center>
        </div>
    </div>
    
  <div class="bgImage">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Monster to Guess</h3>
        </div>
        <div class="panel-body">
            <h2 id="wordToGuess">_ _ _ _ _ _ _ _ _</h2>
        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-body">
            Wrong Guesses: <span id="wrongGuess"></span>
        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-body">
            Guesses Left: <span id="guessLeft"></span>
        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-body">
            Wins: <span id="wins"></span>
        </div>
    </div>  
    
    <div class="panel panel-default">
        <div class="panel-body">
            Losses: <span id="losses"></span>
        </div>
    </div> 
  </div>  
</div>   

<script src="function.js"></script>

 
</body>
</html>
