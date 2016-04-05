---
layout: note
title:  "Learning Ruby on Rails"
date:   2016-04-01
categories: Ruby 
tags: learn
---


##Start Project with MAMP

Go to folder that you want your ruby app in and: 

~~~

rails new app name -d mysql
~~~
{: .language-bash}

Then add in MAMP Socket to the config/database.yml file and also add the password to mysql. 

~~~

/Applications/MAMP/tmp/mysql/mysql.sock
~~~
{: .language-bash}

Then in your gem file add: 

~~~

gem 'mysql2', '~> 0.3.20'
~~~
{: .language-bash}

and then type bundle into the command line to get everything running correctly.

Then to create the database for your app, run in the command line

~~~

rake db:create
~~~
{: .language-bash}

Then go to http://localhost:3000/ and you should get the [ruby start screen][startscreen].

[startscreen]:https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjUsFpdjO13jiu5LnJoclMDW8J0M-nVuVIBpFKzmIujN0R1oVUYMAXO00pfw 

##The Basics

Ruby on Rails is a MVC framework or Model-View-Controller.  The basics of each part:

* The **Model** is the data structures and the methods to access them in general.  It also stores the data that is retrieved according to the commands from the controller and displayed in the view. 
* The **Views** are the templetes that render the data. 
* The **Controller** accepts input and converts it to commands for the model or the view. It can also send commands to the model to update the model's state. 

###Tutorials
- [an overview of ruby on rails][basics]
- [todo list][todo]

[basics]: https://www.smashingmagazine.com/2009/03/getting-started-with-ruby-on-rails/

[todo]: https://www.youtube.com/watch?v=fd1Vn-Wvy2w