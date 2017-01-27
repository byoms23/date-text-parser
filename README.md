# Date Text Parser

## What it is?

A small wrapper around [chrono-node](https://github.com/wanasit/chrono) with [Moment.js](http://momentjs.com/).

## Support

Like Chrono, it supports most date and time formats, such as:

* Today, Tomorrow, Yesterday, Last Friday, etc
* 17 August 2013 - 19 August 2013
* This Friday from 13:00 - 16.00
* 5 days ago
* Sat Aug 17 2013 18:40:39 GMT+0900 (JST)
* 2014-11-30T08:15:30-05:30

### Languages

Like Chrono, it supports English, Spanish, French, Japanese, Chinese.

## How to use it

```
const parser = require('date-text-parser');
const date_info = parser.parse('hoy');
console.log(date_info.start);
```
