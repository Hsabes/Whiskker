# Phase 5 Project: Whiskker App
![Whiskker App](https://i.imgur.com/DoBfUkT.png)

## Description

Whiskker is a React/Rails social media app that helps cat users build a community with other cats, share their lives with Meow Posts, and communicate with one another using Meow Mail.

[DEMO](https://whiskker-app.herokuapp.com/)
Guest username: demo / Guest password: demo

## Technologies/Skills

- React.js 18.2.0
- Ruby 2.7.4
- Rails 6.1.3
- Postgresql
- Object-Oriented Design
- Domain Modeling
- Debugging: Postman, byebug, Application Tab in the Dev Tools
- RESTful API endpoints
- Material UI
- Github
- Heroku-20

## Goals
Our goal was to build a React/Ruby on Rails application while simulating a professional work environment by:
* planning out our user stories, domain models, wireframes and features
* pitching our app in a project proposal
* building a full-stack application using a Rails API backend with a React frontend
* implementing authentication/authorization, including password protection
* utilizing Material UI for our CSS styling
* using Github for our source control system to track code changes and collaborate with team

## Accomplishments
* Complete our MVP of this larger-scale social network application in a short time frame (from ideation to MVP, we had 7 days)
    * created a work timeline focused on working on each feature in vertical slices
    * we focused on prioritizing our MVP features
* For our Rails backend:
    * Self-referential table
    * Multiple one-to-many & many-to-many relationship
    * full CRUD actions for one resource
    * Auth
    * Custom routes
* For our React frontend:
    * Responsive design for both desktop and mobile devices
    * Incorporated a UI framework for our styling with Material UI
    * Auth
    * Included client-side routes using React Router
* Organized our code into purposeful components in order to keep it drywork
* Deployed application using Heroku

## Challenges/Future Improvements
* Further understanding of self-referential associations on the back-end and front-end
* Custom verifications
* Basic database query optimizations

## Avaliable Scripts
* Environment Setup
    * Start PostgreSQL server for WSL: sudo service postgresql start
    * Start PostgreSQL server for OSX: brew services start postgresql

* Fork and clone our [repository](https://github.com/conniedc1206/whiskker-app) onto your local environment:
    * Install the dependencies by running: bundle install & npm install --prefix client
    * In the project directory, you can run the app in the development mode: 
         * create db: rails db:create
         * run migrations and seed data: rails db:migrate db:seed
         * run servers: npm start –prefix client & rails s (in a separate terminal)
         * This will run your server on port http://localhost:4000. Check it out in the browser to make sure your server works!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Creators
---
Connie Park [Github](https://github.com/conniedc1206)  [Linkedin](https://www.linkedin.com/in/conniepark2)  
Samantha Navarro [Github](https://github.com/samantha-navarro)  [Linkedin](https://www.linkedin.com/in/samantha-navarro8/)  
Harrison Sabean [Github](https://github.com/Hsabes)  [Linkedin](https://www.linkedin.com/in/harrison-sabean/)  
