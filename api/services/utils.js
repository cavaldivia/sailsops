module.exports = {

    verifyRut: function (rut, res) {
        
        var rutdiv = this.splitRut(rut);
        var ruti = parseInt(rutdiv[0]);
        var con = 2;
        var resto = 0;
        
        do  {
            if (con > 7) {
                con=2
            };
            
            resto = resto + (ruti % 10)*con;
            ruti = parseInt(ruti / 10);            
            con ++;
            
        } while (ruti > 0);
        
        resto = 11 - (resto % 11);
        if (resto == 10) {
            resto = 'K';
        } else if (resto == 11){
            resto = 0;
        };
        
        if (resto== rutdiv[1]) {
            res = rutdiv[0];
        } else {
            res = '';
        };
        
        return res;
        
    },

   splitRut: function  (rut, res) {
        var ruti = rut.replace('.','');
        res =  ruti.split('-');
        return res
    }

};