# Sumo head-to-head

![Code coverage badge](https://github.com/stuartmcgill/sumo-head2head/blob/image-data/coverage.svg)

This web app shows the head-to-head records of Sumo wrestlers in the top Makuuchi
division.

# Installation

- Download this respository
- `composer install`

<<<<<<< Updated upstream
To serve the website (e.g. with Vagrant):
- `php -S 0.0.0.0:8080 -t public_html public_html/index.php`

Browse to http://localhost:8080/head2head.
=======
Start the server (e.g. for Vagrant):
- `php -S 0.0.0.0:8080 -t public_html public_html/index.php`
>>>>>>> Stashed changes

# Dependencies

_Sumo head-to-head_ is a [Symfony](https://symfony.com/doc/current/setup.html) web app.
The front-end was developed using [Vue.js](https://vuejs.org/), and the data is
sourced from https://sumo-api.com/. The photos are sourced from https://sumodb.sumogames.de/. 

# Preview

![Screenshot](https://github.com/stuartmcgill/sumo-head2head/blob/main/screenshots/demo.png)
