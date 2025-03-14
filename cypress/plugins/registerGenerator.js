import { faker } from '@faker-js/faker';

let register = {}

class RegisterFactory {
    generateRegister() {
        register = {
            "email": faker.internet.email(),
            "password": faker.internet.password()
        }

        return register;
    }

    getRegister() {
        return register;
    }
}

export default RegisterFactory