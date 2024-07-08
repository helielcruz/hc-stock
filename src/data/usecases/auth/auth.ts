import { AccountRepositoryProtocol } from "../../../data/protocols/db";
import { AccountAuthentication } from "../../../domain/usecases/auth/auth";
import { bcryptCompare } from "../../../main/adapters/bcrypt-adapter";
import { jwtGenerateToken } from "../../../main/adapters/jwt-adapter";
import { UnauthorizedError } from "../../../presentation/helpers/api-errors";

export class Authentication implements AccountAuthentication {

    constructor(protected readonly accountRepositoryProtocol: AccountRepositoryProtocol){}

    async login(params: AccountAuthentication.Params): Promise<AccountAuthentication.Result> {

        const { email, password } = params

        const account = await this.accountRepositoryProtocol.findOne({ email })

        if(!account) throw new UnauthorizedError()

        const passwordVerify = bcryptCompare(password, account?.password)

        const token = jwtGenerateToken(account.id, email)

        return { id: account.id, token}
    }
}