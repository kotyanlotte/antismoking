<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <link rel="apple-touch-icon" sizes="180x180" href="images/favicon_package/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon_package/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicon_package/favicon-16x16.png">
  <link rel="manifest" href="images/favicon_package/site.webmanifest">
  <link rel="mask-icon" href="images/favicon_package/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>antismoking</title>

  <link rel="stylesheet" href=" {{ mix('/css/app.css') }} ">
</head>
<body>
  <div id="app"></div>
  <script src="{{ mix('/js/Routing.js') }}"></script>
</body>
</html>
