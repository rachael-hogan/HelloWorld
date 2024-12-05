Frontend
cd Frontend
npm start

Backend
cd Backend
cd src
php -S localhost:8000

Backend Tests
cd Backend
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/HelloWorldTest.php

Frontend Tests
cd Frontend
npm test
