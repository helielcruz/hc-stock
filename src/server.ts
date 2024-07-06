import { AppDataSource } from "./infra/db/typeorm/config/data-source"

    Promise.all([AppDataSource.initialize()]).then(() => {
        console.log('Conected!');
    }).catch( err => console.log(err)
    )