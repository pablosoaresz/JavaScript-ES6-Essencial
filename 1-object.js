let user = {
    name: 'Pablo'
}

//Alterando a propriedade de um objeto
//console.log(user)

user.name = 'Outro nome 1'
    //console.log(user)
user['name'] = 'Outro nome 2'

//console.log(user)
const prop = 'name'
user[prop] = 'Outro nome 3'

//console.log(user)

user.lastName = 'Luiz Ferreira Bachega Soares'
    //Deletando uma propriedade
delete user.name

console.log(user)