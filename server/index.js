//referencia a express
const express = require("express");
const app = express();
// importamos mysql
const mysql = require("mysql");
const cors = require("cors");

//indicar a la aplicacion antes de ejecutar cualquier cosa debe usar
app.use(cors());
app.use(express.json());

//conexion hacia la base de datos
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testers"
});

//creamos la peticion para guardar
app.post("/create", (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const nivel_importancia = req.body.nivel;
    const id_usuario_asignado = req.body.asignar;
    const nombre_proyecto = req.body.nombre_proyecto; // Agregar el campo faltante
    const fecha_creacion = req.body.fecha_creacion;

    db.query('INSERT INTO test_case(codigo, nombre, descripcion, nivel_importancia, nombre_proyecto, id_usuario_asignado, fecha_asignacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [codigo, nombre, descripcion, nivel_importancia, nombre_proyecto, id_usuario_asignado, fecha_creacion], // datos que enviaremos
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Caso Registrado con Éxito");
            }
        }
    );
});

// peticion para mostrar a los usuarios para asignarlos
// Obtener usuarios con rol QA
app.get("/usuarios-qa", (req, res) => {
    db.query("SELECT idUsuario as id, nombre FROM users WHERE rol = 'qa'", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error en la base de datos");
        } else {
            res.send(result); // Enviar la lista de usuarios
        }
    });
});

// metodo para listar  los casos de prueba
app.get("/casos", (req, res) => {
    db.query(
        `SELECT 
            tc.idtest_case AS id,
            tc.nombre,
            tc.descripcion,
            tc.nivel_importancia AS nivel,
            tc.nombre_proyecto,
            tc.fecha_asignacion AS fecha_creacion,
            u.nombre AS asignar
        FROM test_case tc
        JOIN users u ON tc.id_usuario_asignado = u.idUsuario;
`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en la consulta');
            } else {
                res.send(result);
            }
        }
    );
});


// Endpoint para iniciar sesión
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error en la base de datos");
        }
        if (result.length > 0) {
            res.send({ message: "Inicio de sesión exitoso", user: result[0] });
        } else {
            res.status(401).send("Credenciales incorrectas");
        }
    });
});



//decimos que vamos a escuchar por un puerto
app.listen(3001, () => { 
    console.log("Servidor escuchando en el puerto 3001");
    });

