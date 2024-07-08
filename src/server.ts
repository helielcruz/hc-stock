
import { AppDataSource } from "./infra/db/typeorm/config/data-source"
import { setupApp } from "./main/adapters/express-adapter"

    Promise.all([AppDataSource.initialize()]).then(async () => {
        await setupApp()        
    }).catch( err => console.log(err))
