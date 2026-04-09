import InvalidEmail from "../err/InvalidEmail";

const validator = require("validator");

export function ValidateEmail(email) {
    const result = validator.isEmail(email);

    if (!result) {
        throw new InvalidEmail("Email inválido!");
    }

    return true;
}