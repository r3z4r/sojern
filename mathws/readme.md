#Math API

##/min
####given list of numbers and a quantifier (how many) provides min number(s)
######sample Payload:
```
{
"numbers" : [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
"quantifier": 5
}
```
##/max
####given list of numbers and a quantifier (how many) provides max number(s)
######sample Payload:
```
{
"numbers" : [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
"quantifier": 5
}
```
##/avg
####given list of numbers calculates their average
######sample Payload:
```
[3, 6, 7, 8, 8, 10, 13, 15, 16, 20]
```
##/median
####given list of numbers calculates their median
######sample Payload:
```
[3, 6, 7, 8, 8, 10, 13, 15, 16, 20]
```
##/percentile
####given list of numbers and quantifier 'q', compute the qth percentile of the list elements
######sample Payload:
```
{
"numbers" : [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
"quantifier": 5
}
```