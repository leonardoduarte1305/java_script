class Pessoa {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;

        this.falaNomeCompleto = () => {
            return `${this.name} ${this.lastName}`
        }
    }
}

module.exports = {
    Pessoa
};