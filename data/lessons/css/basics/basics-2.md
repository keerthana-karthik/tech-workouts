Ways of adding CSS
-------------

CSS can be added to a document in the following ways

 - Adding inline styles (Element level)
 - Adding inline styles (Document level)
 - Adding external style sheets

Let's see an example for each type

```
<!DOCTYPE>
<html>
  <head>
    <title>CSS example</title>
    <!-- External Style sheet -->
    <link rel='stylesheet' href='myExternalStyle.css' />
    <!-- Inline Style (Document level) -->
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <!-- Inline Style (Element level) -->
    <p style="color: blue;">Hello! World</p>
  </body>
</html>
```