const express = require ('express');
const session = require ('express-session'); // funciona como uma sessão
const bodyParser = require ('body-parser') // interagir com o que veio do formulario

const port = 3000;
var path = require ('path'); //manipular e setar os diretorios 
const app = express (); // definir rotas e outras funcionalidades

                         //usuario e senha que é pra bater na hora do login:
var login = "admin"; 
var password = "Tecspeed";

app.use(session({secret: 'jshdsadsdas'}));
app.use(bodyParser.urlencoded({extended:true})) 

app.engine('html', require ('ejs').renderFile);
app.set('view engine', 'html');
app.use ('/public', express.static(path.join(__dirname, 'public')));
app.set ('views', path.join(__dirname, '/views'));

                              //redirect feito caso a senha não bata, nada acontece
app.post('/',(req,res)=>{
    // console.log (req.body.login);
    if (req.body.password == password && req.body.login == login)
    //login feito com sucesso
    req.session.login = login;

     res.render ('logado');
     console.log ('O meu usuario logado é:'+req.session.login); // manipular as sessoes de login no terminal
    res.redirect('/')

     res.render('index');
})


app.get ('/',(req,res)=>{
     if (req.session.login){
        res.render('logado');  

     }else{

     }
    res.render ('index');
}
     )

app.listen (port,()=>{
     console.log('Sv rodando')
}
     )