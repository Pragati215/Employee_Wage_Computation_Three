class EmployeePayrollData {
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nRegex.test(name)) {
            this._name = name;
        } else throw "Invalid Name";
    }

    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp("^[1-9]{1}[0-9]*$");
        if (idRegex.test(id)) {
            this._id = id;
        } else throw "Invalid id";
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let sRegex = RegExp("^[1-9]{1}[0-9]*$");
        if (sRegex.test(salary)) {
            this._salary = salary;
        } else throw "Invalid salary";
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let gRegex = RegExp("^[MF]$");
        if (gRegex.test(gender)) {
            this._gender = gender;
        } else throw "Invalid gender";
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let date = new Date();
        if (startDate < date) {
            this._startDate = startDate;
        } else throw "Invalid Date";
    }

    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate =
            this.startDate === undefined
                ? "undefined"
                : this.startDate.toLocaleDateString("en-US", options);
        return (
            "id: " + this.id +
            ", name=" + this.name +
            ", salary=" + this.salary +
            ", gender: " + this.gender +
            ", startDate: " + empDate
        );
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(
        1, "John", 30000, "F", new Date());
    console.log(employeePayrollData.toString());

    let empPayrollData = new EmployeePayrollData(
        2, "Rony", 00000, "M", new Date());
    console.log(empPayrollData.toString());
} catch (e) {
    console.error(e);
}

