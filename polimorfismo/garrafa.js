class Garrafa {
    finalide(){
        console.log("Garafa genêrica")
    }
}

class GarrafaTermica extends Garrafa {
    finalide(){
        console.log("Manter a temperatura")
    }
}

class GarraVidro extends Garrafa {
    finalide(){
        console.log("Manter o sabor")
    }
}

class Barril extends Garrafa {
    finalide(){
        console.log("Armazenar grandes quantidades")
    }
}
