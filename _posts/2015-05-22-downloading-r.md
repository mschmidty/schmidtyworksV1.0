---
layout: post
title:  "Downloading R"
date:   2015-05-22
categories: blog 
tags: computer-science programming statistics
---

I recently went to a BLM training that was put on by the [Jornada Research Station][Jornada].  I was very impressed with how forward thinking they were in their approach to science. They were using wep apps, programming and technology in general to help them more efficiently do their jobs.  In their training they talked many times about using an open source software called [R][r] to analyze data.  Being the computer geek that I am I had to download it.  Here's  a quick tutorial on how I did it....

Note: I use a mac at home and I downloaded R on my home machine.  I use a PC at work and if I get R working on my work machine I'll update this tutorial. 

##The Terminal

<div class="post-image-icon center">
<img src="{{"images/post-images/downloading-r/terminal-icon.png" | prepend:site.baseurl}}" alt="R Logo">
</div>

All of this work will be done inside the terminal. Terminal comes pre-installed with Mac OSX and can be found in your utilities folder. If you aren't familiar with the terminal you should be.  Without going into too much detail the terminal allows you to do really cool things with your machine with short commands.  For example, you can run a server, open a program, create a file, access a remote surver, compile data, make a website, download programs and download and run R. For a short tutorial check [here][tutsplusterminal]

## Get Homebrew

I used homebrew to install "r" and its dependencies on my machine.  If you don't have homebrew, you can find a tutorial on [how to download it here][homebrewdownload] and [what it is here][homebrew]. 

## Too Technical?
You can also download R from a mirror at their [website][r] if this all seems a little too technical (but come on, release your inner geek!). 

## Download

<div class="post-image-icon center">
<img src="{{"images/post-images/downloading-r/rlogo.png" | prepend:site.baseurl}}" alt="R Logo">
</div>

To download, open up your terminal and type the following as individual commands:

~~~~
$ brew cask install xquartz
$ brew tap homebrew/science
$ brew install r
$ brew doctor
~~~~
{: .language-bash }

Its a good idea to check if everything installed correctly by typing:

~~~~

$ r
~~~~
{: .language-bash}

And you should get the following:

~~~~

R version 3.2.0 (2015-04-16) -- "Full of Ingredients"
Copyright (C) 2015 The R Foundation for Statistical Computing
Platform: x86_64-apple-darwin14.3.0 (64-bit)

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

  Natural language support but running in an English locale

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.

>
~~~~
{: .language-r}

Now, with R still running lets try a few things:

~~~~

>  x <- 29000+30000 
>  x
[1] 59000
>
~~~~
{: .language-r}

And that's all there is to it, you have now downloaded R. 

##Sublime Text

<div>
  <img src="{{"images/post-images/downloading-r/sublime-screen-shot.jpg" | prepend:site.baseurl}}" alt="Sublime Text 3 Screenshot">
</div>

Screen grab of my whole blog. 
{: .photo-tag}

Most people can stop here.  You have R downloaded and you can start working with it.  However, if you enjoy improving you work environment like I do you can further improve your workflow if you want. I have really enjoyed using [Sublime Text 3][sublime] as a text editor (an alternative to this would be to download [R Studio][rstudio].  To bring R into an environment that I am familiar with, I downloaded [SublimeREPL][sREPL] using [Sublime Package control][packageControl].  SublimeREPL allows you to compile R scripts right in the Sublime environment. 

To create a key-binding in Sublime to run R scripts past the following into your Preferences>Key Bindings - User  file: 

~~~~

 // Executes a selection of text in REPL
{ "keys": ["control+shift+j"], "command": "repl_transfer_current", "args": {"scope": "selection"}},

// Executes the entire file (build) in REPL
{ "keys": ["control+shift+k"], "command": "repl_transfer_current", "args": {"scope": "file"}},
   
// Executes line(s) of text in REPL terminal
{ "keys": ["control+shift+l"], "command": "repl_transfer_current", "args": {"scope": "lines"}}
~~~~
{: .language-bash}


Now we can open sublime create a file like we did above: 

~~~~

>  x <- 29000+30000 
>  x
[1] 59000
>
~~~~
{: .language-r}

Go to Tools>SublimeREPL>R and an new window should pop up with the R warning:

~~~~

R version 3.2.0 (2015-04-16) -- "Full of Ingredients"
Copyright (C) 2015 The R Foundation for Statistical Computing
Platform: x86_64-apple-darwin14.3.0 (64-bit)

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

  Natural language support but running in an English locale

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.

>
~~~~
{: .language-r}

And you should be able to highlight your r text: 

~~~~

>  x <- 29000+30000 
>  x
[1] 59000
>
~~~~
{: .language-r}

and press cntrl+shift+j and your code should compile in the window running R.  


Now you're ready to use or learn R in a very nice working environment. 

##Downloading and using Packages

R takes advantage of packages to increase its flexibility. The packages are created by people to do specific things. For example let's say I want to download a package that can do a power analysis for spacial information.  I search google and find that the [rSPACE][rSPACE] program does that.  I open up the command line and type:

~~~

install.packages('rSPACE')
~~~
{: .language-r}

In the command line will ask what mirror you would like to selact.  My closest is California, so I type "20".  Note that downloading packages won't work in REPL/Sublime if you have that set up. 

###Including packages in a project

To use this package in a script include the following at the beginning of the script to load the package into your project: 

~~~

library(rSPACE)
~~~
{: .language-r}

Note that R libraries disappear at the end of each r session, so you must re-load the the library with each r session. 

More resources: [How to Package on Youtube][youtube packages]

##Resources

* [Video on how to use microsoft data in R][microsoftr]
* [Stats for Biologists with R][rbiostats]
* [How to get sublime text working with R][sublimer]



{::comment} -----Links ---------{:/comment}



[r]:    http://www.r-project.org/

[Jornada]:  http://jornada.nmsu.edu/  

[homebrewdownload]: https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Installation.md#installation

[homebrew]: http://brew.sh/

[tutsplusterminal]: http://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855

[microsoftr]:   https://www.youtube.com/watch?v=qPk0YEKhqB8&list=PLqzoL9-eJTNBDdKgJgJzaQcY6OXmsXAHU&index=4


[rbiostats]:  http://cran.r-project.org/doc/contrib/Seefeld_StatsRBio.pdf

[sublimer]: http://www.alshum.com/sublime/

[sublime]: https://www.sublimetext.com/

[packageControl]: https://packagecontrol.io/

[sREPL]: https://github.com/wuub/SublimeREPL

[rstudio]: http://www.rstudio.com/

[rSPACE]: https://cran.r-project.org/web/packages/rSPACE/index.html

[youtube packages]: https://www.youtube.com/watch?v=3RWb5U3X-T8&list=PLqzoL9-eJTNBDdKgJgJzaQcY6OXmsXAHU&index=11


