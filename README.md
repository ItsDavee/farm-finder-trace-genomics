# Farm App Trace Genomics Full Stack Tech Assessment 

## Challenge
You've been asked to create a way for users to easily view farm information.
After doing user research, you've determined that the MVP feature requests are:
- Look up farms by name
- Find farms by revenue
- View field details for a given farm

Using the farm_data.json file provided, create a basic Front End and Back End to support your users. An initial React/Express structure is provided, but feel free to use standard boilerplate or backend structure. 

We expect this project to take around 3-4 hours. As this is a short amount of time for the  given scope, a persistence layer is not required and a FE library  (bootstrap/material-ui/etc) is recommended to help support making your FE look great. Code comments are appreciated to better understand your decision making process.

### Deliverables
- Front End that fulfills user MVP requests above
- Basic Backend with API communication with Front End
- Simple test suite
- Readme 
    - Instructions on how to run application and tests
    - Assumptions and considerations for design choices
    - Future direction if you had time to work on project for 1 more day? 1 more week?
  
### Instructions
- To start the server run ```npm run start``` from inside the ```farm-app-fullstack``` directory and then visit http://localhost:8000
- Once the application is running you can run the test suite by running ```npm run tests``` from the ```farm-app-fullstack``` directory.


### Future Direction
- One more day
    - If I had an additional day I would have separated the FarmService into a FarmService and a FarmRepository to further separate the storage from the queries
    - I would also spend more time making a more robust front end design
    - Add in error handling and test more than happy path requests
  
- One more week
    - If I had an additional week I would have built out a persistance layer and built a full rest api on top of that
  



