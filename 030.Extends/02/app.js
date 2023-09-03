// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer

class Person {
    name;
    address;
    phoneNumber;
    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setName(name) {
        this.name = name;
    }

    setAddress(address) {
        this.address = address;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
};



class Customer extends Person {
    numberOfClient;
    bool;

    getnumberOfClient() {
        return this.numberOfClient;
    }
    getbool() {
        return this.bool
    }

    setnumberOfClient(numberOfClient) {
        this.numberOfClient = numberOfClient;
    }
    setbool(bool) {
        this.bool = bool;
    }
}

const customer = new Customer()
customer.setName(`Roman`);
customer.setAddress(`lida`);
customer.setPhoneNumber(`+37529545445`);
customer.setnumberOfClient(5);
customer.setbool(true);

const name_ = customer.getName();
const address = customer.getAddress();
const phone = customer.getPhoneNumber();
const client = customer.getnumberOfClient();
const bool = customer.getbool();

console.log(name_, address, phone, client, bool);


