import { Room } from "../entites/Room"
import { mysqlConfig } from "../config"
import { RoomType } from "../entites/RoomType"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    entities: [RoomType, Room],
    ...mysqlConfig as any
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("datasource created")
    })
    .catch((error) => console.log(error))

export { AppDataSource }