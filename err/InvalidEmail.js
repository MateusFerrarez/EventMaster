
class InvalidEmail extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidEmail";
    }
}

export default InvalidEmail;