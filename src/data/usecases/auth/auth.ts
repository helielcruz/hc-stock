import { AccountRepositoryProtocol } from "../../../data/protocols/db";
import { AccountAuthentication } from "../../../domain/usecases/auth/auth";
import { bcryptCompare } from "../../../main/adapters/bcrypt-adapter";
import { jwtGenerateToken } from "../../../main/adapters/jwt-adapter";
import { NotFoundError, UnauthorizedError } from "../../../presentation/helpers/api-errors";

export class Authentication implements AccountAuthentication {

    constructor(protected readonly accountRepositoryProtocol: AccountRepositoryProtocol){}

    async login(params: AccountAuthentication.Params): Promise<AccountAuthentication.Result> {

        const { email, password } = params

        const account = await this.accountRepositoryProtocol.findOne({ email })

        if(!account) throw new NotFoundError()

        const passwordVerify = bcryptCompare(password, account?.password)

        if(!passwordVerify) throw new UnauthorizedError

        const token = jwtGenerateToken(account.id, email)

        delete account.password

        return { ...account, token}
    }
}