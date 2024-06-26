import colors from "ansi-colors";
export class MessageInfoUtils {
    static messageInfoUpdatePrismaSchemaUtils(): void {
        console.log(`\n${colors.cyan(`The auth component has been installed.`)}`);
        console.log(`${colors.cyan(`Updated:`)} prisma/schema.prisma`);
        this.message();
    }
    static messageInfoUtils(): void {
        console.log(`\n${colors.cyan(`The auth component has been installed.`)}`);
        this.message();
    }

     private static message() {
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/application/validators/user.validator.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/contracts/user.contract.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/repositories/user.repository.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/application/interfaces/refreshToken.interface.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/application/interfaces/user.interface.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/domain/enums/role.enum.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/usecases/fetchUserByConfirmEmailToken.usecase.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/usecases/fetchUserByEmail.usecase.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/usecases/fetchUserByForgetPasswordToken.usecase.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/usecases/fetchUserById.usecase.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/usecases/fetchUserByUsername.usecase.ts`)}`);
        console.log(`${colors.cyan(`Created:`)} ${colors.green(`/src/persistence/usecases/fetchUserWithRefreshTokenByUserId.usecase.ts`)} \n`);
        console.log(`${colors.bgCyan(`${colors.white(`What's next ?`)}`)}\n`);
        console.log(`If you need a middleware to authenticate user before any resource request.`);
        console.log(`Install this package with this command : npm i opticore-authentication-middleware`);
        console.log(`Then, you can use this command : ${colors.cyan(`npx opticore-make-authentication`)}`);
    }
}