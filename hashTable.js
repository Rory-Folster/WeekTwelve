function hashStringtoInt(s){
    return 5;

}

class hashTable {              //setting the class
    
    table = new Array(100)
    
    setItem = (key, value) => {
        const idx = hashStringtoInt(key) //
        this.table[idx] = value

    }

    getItem = (key) => {
        const idx = hashStringtoInt(key)
        return this.table[idx];
    }

}

const myTable = new hashTable()
myTable.setItem('firstName', 'Rory')
myTable.getItem('firstName')
console.log(myTable.getItem("firstName"));