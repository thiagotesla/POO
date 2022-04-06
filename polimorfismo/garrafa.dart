class Garrafa{
    void finalidade(){
        print("Garrafa genêrica");
    }  
}

class GarrafaTermica extends Garrafa{
    @override
    void finalidade(){
        print("Manter a temperatura");
    }
}

class GarrafaVidro extends Garrafa{
    @override
    void finalidade(){
        print("Manter o sabor");
    }
}

class Barril extends Garrafa{
    @override
    void finalidade(){
        print("armazenar grandes quantidades");
    }
}
