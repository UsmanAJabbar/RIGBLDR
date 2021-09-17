## RIGBLDR's backend api!

written primarily using node.js with express and sequelize.

to get started: 
- add your database information to config/config.js 
- create the db and grant permissions for your user
- from the backend directory, do a 'npm run server' and it should create your tables with no error, etc..

... for now we still don't have the default dataset autofill on startup so to get some quick data to play with, 
and AFTER the tables have been created above, log into mysql, use your database, and run:

> source util/default_dataset.sql

For now you can use the endpoint as:

- /$part/ for all of that part type, or 
- /$part/:id for a specific id, or
- /$part?key=value&key=value

where $part is one of:
cpu, mobo, ram, psu, gpu, case, ssd
