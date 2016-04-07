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

##Basic App

### First Create a controller

~~~

bin/rails generate controller welcome index
~~~
{: .language-bash}

This will create a new controller, and run the "controller" generator and tell it you want a controller called "welcome" with an action called "index", just like this.

###Update the view

Got to app/views/index.html.erb and edit the file to includ whatever.  This is editing the view. 


###Create a route

Go to config/routes.rb

~~~

Rails.application.routes.draw do 
  root 'welcome#index'  
end
~~~
{: .language-bash}

root 'welcome#index' tells Rails to map requests to the root of the application to the welcome controller's index action and get 'welcome/index' tells Rails to map requests to http://localhost:3000/welcome/index to the welcome controller's index action. This was created earlier when you ran the controller generator (bin/rails generate controller welcome index).



## More complex now:CRUD action

CRUD: create, update and destroy

###Create routes to articles

In your config>routes.rb file add resources :articles so that the file looks like this:

~~~

Rails.application.routes.draw do 
  resources :articles //New part
  root 'welcome#index'  
end
~~~
{: .language-bash}

Then in the command line run:

~~~

bin/rake routes
Running via Spring preloader in process 15261
      Prefix Verb   URI Pattern                  Controller#Action
    articles GET    /articles(.:format)          articles#index
             POST   /articles(.:format)          articles#create
 new_article GET    /articles/new(.:format)      articles#new
edit_article GET    /articles/:id/edit(.:format) articles#edit
     article GET    /articles/:id(.:format)      articles#show
             PATCH  /articles/:id(.:format)      articles#update
             PUT    /articles/:id(.:format)      articles#update
             DELETE /articles/:id(.:format)      articles#destroy
        root GET    /
~~~
{: .language-bash}

The combination of adding resoureces to the routes.rb and running rake will create a variety of routes. On a vary basic level, this action allows paths to new pages. 

###Create Controller for articles

~~~

$ bin/rails generate controller articles
~~~
{: .language-bash}

This create a controller for articles. Navigate to http://localhost:3000/articles/new and you should get an error saying "*unknown action*".  To fix this, go to app/controllers/articles_controller.rb and add:

~~~

class ArticlesController < ApplicationController
  def new
  end
end
~~~
{: .language-bash}

###Creating a View

Refresh and you should get one more error that says "*Template Missing*".  To finish out the sequence you need to add a template in the: app/views/articles/ folder. Save the files as new.hmtl.erb. The error should go away. 




###Tutorials
- [an overview of ruby on rails][basics]
- [todo list][todo]

[basics]: https://www.smashingmagazine.com/2009/03/getting-started-with-ruby-on-rails/

[todo]: https://www.youtube.com/watch?v=fd1Vn-Wvy2w