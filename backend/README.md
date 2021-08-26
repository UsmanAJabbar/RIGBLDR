## RIGBLDR's backend api!

written primarily using node.js with express and sequelize.

to get started: 
- add your database information to config/db.config.js 
- create the db and grant permissions for your user
- from the backend directory, do a 'npm run server' and it should create your tables with no error, etc..

... for now we still don't have the default data loaded so to get some quick data to play with, 
and AFTER the tables have been created above, log into mysql, use your database, and run:

INSERT INTO `apis` (vendor_id, vendor_product_id, price, in_stock, createdAt, updatedAt) VALUES (1,'B0815XFSGK',393.99,1,curdate(),curdate()),(1,'B08166SLDF',288.99,1,curdate(),curdate()),(1,'B086ML4XSB',319.99,1,curdate(),curdate()),(1,'B08H2DRCWZ',499.99,1,curdate(),curdate());
INSERT INTO `processors` VALUES (1,'AMD','Ryzen 7',5,'5800x','AM4',8,16,1,'105W','AMD Ryzen 7 5800X',1),(2,'AMD','Ryzen 5',5,'5600x','AM4',6,12,1,'105W','AMD Ryzen 5 5600X',2),(3,'Intel','Core i7',10,'10700k','LGA1200',8,16,1,'125W','Intel Core i7 10700k',3),(4,'Intel','Core i9',10,'10900k','R4',10,20,1,'125W','Intel Core i9 10900k',4);


For now you can use the endpoint as:

- /cpu/ for all processors, or 
- /cpu/:id for a specific id, or
- /cpu?key=value&key=value
- - currently supported: socket, and core, with more key params coming soon!
