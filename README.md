# Gift of the Pagi

A clean prev/next paginator to be used with jQuery and Bootstrap 3.

Depends on:

* jQuery
* Bootstrap 3

[See demo](https://dl.dropboxusercontent.com/u/21334841/demos/jquery-gift-of-the-pagi/demo.html).

## Installation

can be installed via npm:

```
npm install jquery-gift-of-the-pagi
```

or alternatively just cloned via git:

```
git clone git@github.com:zakangelle/jquery-gift-of-the-pagi.git
```

can be used as a CommonJS module:

```js
require('jquery-gift-of-the-pagi');
```

or loaded in by using a script tag:

```html
<script src="jquery-gift-of-the-pagi/jquery-gift-of-the-pagi.js"></script>
```

Also, make sure to include the CSS: `jquery-gift-of-the-pagi.css`

## Use

**HTML**
```html
<ul class="pagi-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

**JS**
```js
$('.pagi-list').giftOfThePagi();
```

Or alternatively call it with options:

```js
$('.pagi-list').giftOfThePagi({
  prevButtonText: 'Previous',
  nextButtonText: 'Nextness'
});
```
