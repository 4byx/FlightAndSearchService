## Tables

### City -> id , name , created_at , updated_at

### Airport -> id , name , address , city_id , created_at , updated_at

#### Relationship -> City has many airports and Airport belongs to a city (one to many)

## Folders

### Seeders

#### Command to generate seeds `npx sequelize seed:generate --name add-airports`

#### Command to seed Data `npx sequelize db:seed:all`
