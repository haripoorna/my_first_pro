
module.exports= function(sql) {
    return sql.createConnection({host:'localhost', user:'root', password:'root', port:'3306', database:'josulogin'})
}
