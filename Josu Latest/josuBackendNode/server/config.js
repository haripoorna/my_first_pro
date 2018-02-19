
module.exports= function(sql) {
    //return sql.createConnection({host:'localhost', user:'root', password:'localroot', port:'3306', database:'josulocal'})
    // return sql.createConnection({host:'192.168.1.21', user:'root', password:'paddu@123', port:'3306', database:'josu'})
return sql.createConnection({host:'localhost', user:'root', password:'root', port:'3306', database:'josu_latest'})
}
