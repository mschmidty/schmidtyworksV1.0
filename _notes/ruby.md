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

Since I run mySQL from MAMP, you might need to run the following in the command line to point your computer to MAMPs version of mySQL. 
[heres notes on a solution][mamp_sql]

~~~

sudo ln -s /Applications/MAMP/tmp/mysql/mysql.sock /tmp/mysql.sock
~~~
{: .language-bash}

And then run the following in the command line. 

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
{: .language-ruby}

###Creating a View File

Refresh and you should get one more error that says "*Template Missing*".  To finish out the sequence you need to add a template in the: app/views/articles/ folder. Save the files as new.hmtl.erb. The error should go away. You can add HTML to it now. 

###Make a form 

To make a form we need to add some html and erb to our file.  The basic form looks like this:

~~~

<h1>New Article</h1>

<%= form_for :article, url: articles_path do |f| %>

  <p>
    <%= f.label :title %> <br>
    <%= f.text_field :title %>
  </p>
  <p>
    <%= f.label :text %> <br>
    <%= f.text_area :text %>
  </p>
  <p>
    <%= f.submit %>
  </p>
<%end%>
~~~
{: .language-bash}

You need to look closer into the "url: articles_path do" part of the above code.  It redirects your action after submit. 

###Create action in controller

If you submitted the form you'd get an unknown action error.  You need to create the action in the app\controller\articles_controller.rb 

~~~ 

class ArticlesController < ApplicationController
  def new
  end

  def create //This is the part that you are adding
  end //This too. 
end
~~~
{: .language-bash}

This sends the info to the database that we are about to create.  If you submit again, you'll get an error. 

###Creating Model/ Database

To create the model, in the command line enter the following:

~~~

bin/rails generate model Article title:string text:text
~~~
{: .language-bash}

This will create a migration file that will create a table with the fields, title and text, the first a string and the second a text area in your database.  Look into db/migrate/20140120191729_create_articles.rb (the name may be slightly different). This tells rails how to make the database migration.  This migration can be undon too, which is nice.  To migrate the DB, run in the command line:

~~~

rake db:migrate
~~~
{: .language-bash}

###Finish article_controller "create"

Inside of the create method we need to add what we want it to do.  What we want is for the data from our form to go to the database after we have pressed submit. To do this, we need to enter the following into our articles_controller.rb file:

~~~

def create
  @article = Article.new(params[:article])  //Add this

  @article.save //Add this
  redirect_to @article //Add this
end

~~~
{: .language-bash}


We can almost submit our form. But first we need to tell rails that it is ok to submit these things to the database. Rails forces this step to make sure malicious stuff can't be added to our database. Below  the cod listed above add. 

###Show the article

So that rails knows what article we are trying to show after submit we need to create an action that will show.  If you look at the rake routes for articles bash, under articles#show you see the URI says /articles/:id.  So we need to create a action called show that finds the id for articles.

~~~

def show
  @article = Article.find(params[:id])
end
~~~
{: .language-bash}

and then change the create so all of it looks like:

~~~
def create
  @article = Article.new(article_params)

  @article.save
  redirect_to @article
end

private

  def articles_params
    params.require(:article).permit(:title, :text)
  end
~~~
{: .language-bash}

After we enter that in the controller we need to create a view that the information will be shown on. 

~~~
<h2><%= @article.title %></h2>
 
<p>
  <%= @article.text %>
</p>
~~~
{: .language-markup}

The show page is created. 

###Creating an index










###Tutorials
- [an overview of ruby on rails][basics]
- [todo list][todo]

[basics]: https://www.smashingmagazine.com/2009/03/getting-started-with-ruby-on-rails/

[todo]: https://www.youtube.com/watch?v=fd1Vn-Wvy2w

[mamp_sql]: https://boriskuzmanovic.wordpress.com/2008/11/26/mamp-error-2002-hy000-cant-connect-to-local-mysql-server-through-socket-tmpmysqlsock-2/