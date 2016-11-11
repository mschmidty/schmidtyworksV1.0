---
layout: note
title:  "R Resources"
date:   2016-03-01
categories: notes 
tags: r
---

[R by Example][R tutorial] - Great resources for learning R. 

[Googles Style Guide][s guide] - Best practices

[R datasets to play with][datasets]

[Why, when and how to not use attach][attach]

##How to use data within a package

~~~
###Basic loading data
data(foo)
#
attach(foo)
#
#
head(foo)

~~~
{: .language-r}

##Tutorials

[USArrests data][usaarrests tutorial]




[R tutorial]: http://www.mayin.org/ajayshah/KB/R/index.html

[s guide]: https://google.github.io/styleguide/Rguide.xml

[datasets]:http://stat.ethz.ch/R-manual/R-devel/library/datasets/html/00Index.html

[attach]: http://stackoverflow.com/questions/10067680/why-is-it-not-advisable-to-use-attach-in-r-and-what-should-i-use-instead

[usaarrests tutorial]: http://brazenly.blogspot.com/2014/04/r-simple-graphs-plots-to-visualize-and.html