
class InvalidName extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidName";
    }
}

export default InvalidName;