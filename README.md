# Welcome to fligths service

## Project setup
- clone the project on your local
- execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory and add following environment variables
    - `PORT=3000`
- inside the `src/config` folder create a new file `config.json` and then add the following piece of json 
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD  >,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you have added your db config as listed above, go to the src folder from
your terminal and execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`



## DB Design
- Airplane table
- Flight table
- City/Airport table

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belong to one city only
- One airport can have many flights but a flight belongs to one airport only, i.e 2 airports, one is source and other is destination



## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports but airport belongs to a city (one to many)


```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
npx sequelize db:migrate
```

