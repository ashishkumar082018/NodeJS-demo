class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minPlacementAge) {
        return () => {
            if (this.age >= minPlacementAge) {
                console.log(this.name + " is Eligible");
            } else {
                console.log(this.name + " is not Eligible");
            }
        };
    }
}

const yash = new Student("yash", 22, 55);
const vaibhav = new Student("vaibhav", 25, 75);

yash.setPlacementAge(18)();
vaibhav.setPlacementAge(18)();
