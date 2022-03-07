const express = require('express');
const app = express();
const Port = process.env.Port || 8080;
const path = require('path');
const hbs = require('hbs');


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));


//Configuramos el Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Routes
app.get('/', (req, res) =>{
    res.render('index', {titulo: 'Node.JS y Handlebars'})
});


app.get('/galeria', (req, res) =>{
    res.render('galeria')
});


app.get('/formulario', (req, res) =>{
    res.render('formulario')
});

app.get('/turismo', (req, res) =>{
    res.render('turismo')
});



//Configuramos la ruta post del formulario
/*Los datos los va a sacar desde los inputs, los cuales tienen que tener como atributo name el 
nombre de la variable que estoy describiendo en las constantes.
El method del formulario tiene que ser post*/ 
app.post('/formulario', (req, res) => {
    const {nombre, apellido, numpasajeros, fecha_ingreso, fecha_egreso, mail, telefono} = req.body;
    let validacion = "Faltan datos para enviar formulario"
    
    if(nombre == "Juli" && apellido == "Chamorro" && telefono == 2739){
        res.render('administrador')
    }else{
        console.log(`${nombre} ${apellido} 
        N° de pasajeros: ${numpasajeros} 
        Fecha de ingreso: ${fecha_ingreso} 
        Fecha egreso: ${fecha_egreso} 
        Mail: ${mail} 
        Tel: ${telefono}`);
        res.render ('index')
    }
})



//Configuración del servidor
app.listen(Port, () =>{
    console.log(`Servidor está trabajando en el Puerto ${Port}`);
});

app.on('error', (err) =>{
    console.log(`Error en la ejecución del Servidor ${error}`);
})


