-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


('Desk chair for Free! Today only!', 'desk chair', 'Grab this item. First come, first serve!', 'Pickup', 'Fair', 'Office', 'https://productvisualization.steelcase.com/prod/threekit_stage/66/66c615da5e654d6ba13b670303813f4f/9b43d18d-89fa-4e89-bf00-50b526088279.png', '', '', ''),

('Pretty Plate!', 'Plate', 'Flower and detailed', 'Pickup', 'Like New', 'Office', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0mMV-Ohb7ogbDp6PGUEMyFXK8Rc5hhw2j0cTBO8c9rYYLikF-BMdhwxOdM2CccB1QgOu6NZBapw_YE4QNIM2M-0eiypw55ok3Ve8qxGCpjqYxC-_24FZOpqrf', '', '', ''),

('Free Plate for You!', 'plate', 'Grab this item!', 'Delivery', 'Excellent', 'Home Goods', 'https://www.cvlinens.com/cdn/shop/products/Plain-Round-13-Inch-Charger-Plate-Gold_c4d4c7ae-689d-4fac-bdea-6a7eb65b45fd.jpg?v=1587675984&width=600','', '', '');