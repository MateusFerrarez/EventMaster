
export default class DuplicatedEmail extends Error {
    constructor(message) {
        super(message);
        this.name = "DuplicatedEmail";
    }
}