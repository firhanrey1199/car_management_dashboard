# car_management_dashboard
Car Management Dashboard is a API for Website.

# ERD
![Car Rental Binar](https://github.com/firhanrey1199/car_management_dashboard/assets/56550997/7df035a0-3d99-4ac7-bb57-d1e0fe04aec4)

# ENDPOINT
API
- [GET] http://localhost:3000/v1/cars => SHOW LIST CARS
- [POST] http://localhost:3000/v1/cars/create => CREATE CARS / POST
- [DELETE] http://localhost:3000/v1/cars/delete/:id => DELETE CARS BY ID

# HOW TO RUN/INSTALL
- download or clone repo
- run "npm install"
- configure knexfile.ts & index.ts
- run "npx run migrate:latest"
- run "npm run"
