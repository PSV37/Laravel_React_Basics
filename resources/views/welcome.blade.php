<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Laravel</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
        <!-- Fonts -->
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,600"
            rel="stylesheet"
            type="text/css"
        />
        <link
            href="http://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <!-- Import materialize.css -->
        <link
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
            rel="stylesheet"
        />
        <script src="sweetalert2/dist/sweetalert2.all.min.js"></script>

        <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support -->
        <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.js"></script>
    </head>
    <body>
        <div><div id="app"></div></div>

        <!-- Import jQuery before materialize.js -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    </body>
</html>
