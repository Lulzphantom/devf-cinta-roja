// #1 superClass Teacher and sub clases

class Teacher {

    constructor(qualification){
        this.qualification = qualification
    }
    
    average = () => {
        let avr = 0;

        for (let i = 0; i < this.qualification.length; i++) {
            avr += this.qualification[i];            
        }

        return avr / this.qualification.length;
    }

}

class PhysicsTeacher extends Teacher {
    constructor(qualification, seniority){
        super(qualification),
        this.seniority = seniority
    }
}

class MusicTeacher extends Teacher {
    constructor (qualification, age){
        super(qualification),
        this.age = age
    }
}

// #2 Construction class, sub classes and methods

class Construction {
    constructor(doors, windows, floors, address, height, length, width){
        this.doors      = doors,
        this.windows    = windows,
        this.floors     = floors,
        this.address    = address,
        this.height     = height,
        this.length     = length,
        this.width      = width
    }

    showSquareM = () => {
        return this.length * this.width;
    }

    showAddress = () => {
        return this.address;
    }

    newAddress = (address) => {
        this.address = address;
    }
    
}

class House extends Construction {        
    constructor(doors, windows, floors, address, height, length, width){
        super(doors, windows, floors, address, height, length, windows);        
    }
    
}

class Building extends Construction {
    constructor(doors, windows, floors, address, height, length, width){
        super(doors, windows, floors, address, height, length, windows);        
    }
    
}

// Test ---------------------------------
let elLab = new Building(2, 10, 2, '', 10, );

// #3

