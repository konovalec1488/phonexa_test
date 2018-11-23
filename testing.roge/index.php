<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Auto Insurance</title>
  <meta name="description" content="auto insurance">
  <meta name="Roger" content="">
  <link rel="shortcut icon" href="assets/img/favicon.png" type="image/png">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/style.min.css">

</head>

<body>

<header id="header" >
  <div class="container">
    <div class="row">
      <div class="col-md-3 img_car"></div>
      <div class="col-md-6 col-12">
        <h1 class="text-center">Auto Insurance</h1>
      </div>
      <div class="col-md-3 img_insurance"></div>
    </div>
  </div>
</header>
<!-- /header -->
<main>
   <div class="task1">
    <?php require_once 'views/task1.php';?>
  </div>

  <div class="task2">
    <?php require_once 'views/task2.php';?>
  </div>

  <div class="task3">
    <?php require_once 'views/task3.php';?>
  </div>

  <div id="post_success">
    <div class="container">
      <div class="row ustify-content-center">
        <div class="col-12 table_green">
          <h3 class="text-center success_text"></h3>
        </div>
      </div>
    </div>
  </div>

</main>
<!-- /main -->
 <footer>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <p class="text-center company">Test task for <span>Phonexa</span></p>
        </div>
        <div class="col-md-6"></div>
        <div class="col-6 col-md-3">
          <p class="text-center author">Made by
            <a href="https://www.linkedin.com/in/alexey-halenko/" target="_blank">Alex Halenko</a>
          </p>
        </div>
      </div>
    </div>
  </footer>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="libs/jquery/jquery-3.3.1.min.js"><\/script>')</script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

  <script src="assets/js/task1.min.js"></script>
  <script src="assets/js/cars.min.js"></script>
  <script src="assets/js/task3.min.js"></script>

</body>
</html>
