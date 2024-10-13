//referencia a express
const express = require("express");
const app = express();
// importamos mysql
const mysql = require("mysql");
const cors = require("cors");

//para encriptar mis contraseñas
const bcrypt = require('bcrypt');

//indicar a la aplicacion antes de ejecutar cualquier cosa debe usar
app.use(cors());
app.use(express.json());

//conexion hacia la base de datos
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testing"
});

// Creación de la petición para registrar un nuevo usuario
app.post("/register-user", async (req, res) => {
    const { codigo, nombre, correo, password, confirmPassword, rol } = req.body; // Obtener los datos del usuario

    // Comprobar si las contraseñas coinciden
    if (password !== confirmPassword) {
        return res.status(400).send("Las contraseñas no coinciden"); // Enviar error si no coinciden
    }

    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de sal

        db.query(
            'INSERT INTO users(codigo, nombre_completo, correo, password, rol) VALUES (?, ?, ?, ?, ?)',
            [codigo, nombre, correo, hashedPassword, rol], // Usar la contraseña hasheada
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send("Error al registrar el usuario"); // Enviar error si ocurre
                }
                res.send("Usuario Registrado con Éxito"); // Enviar respuesta de éxito
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al hashear la contraseña"); // Enviar error si ocurre al hashear
    }
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
