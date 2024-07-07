import { AppDataSource } from "./infra/db/typeorm/config/data-source"
import { setupApp } from "./main/adapters/express-adapter"

    Promise.all([AppDataSource.initialize()]).then(async () => {
        const app = await setupApp()
    
        app.listen(3000, () => {
            console.log('Running in port 3000!');
        })
    }).catch( err => console.log(err))
