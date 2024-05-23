<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

try {
    // Establece la conexión PDO con la base de datos
    $pdo = new PDO("mysql:host=localhost;dbname=images_db", "root", "");
    // Configura PDO para lanzar excepciones en errores
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Maneja cualquier error de conexión a la base de datos
    echo json_encode(array("error" => "Error de conexión a la base de datos: " . $e->getMessage()));
    exit();
}

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Consulta para obtener todas las imágenes
    $stmt = $pdo->query("SELECT id, name, imageURL FROM images");
    // Obtiene todas las filas resultantes como un array asociativo
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Devuelve los datos como JSON
    echo json_encode($data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_GET['action'])) {
    // Procesa la solicitud POST para crear una nueva imagen
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['name'];
    $imageURL = $data['imageURL'];
    // Prepara la consulta para insertar una nueva imagen en la base de datos
    $stmt = $pdo->prepare("INSERT INTO images (name, imageURL) VALUES (?, ?)");
    // Ejecuta la consulta con los valores proporcionados
    if ($stmt->execute([$name, $imageURL])) {
        echo json_encode(array("message" => "Imagen creada con éxito."));
    } else {
        echo json_encode(array("error" => "Error al crear la imagen."));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Procesa la solicitud PUT para actualizar una imagen existente
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $name = $data['name'];
    $imageURL = $data['imageURL'];
    // Prepara la consulta para actualizar la imagen con el ID proporcionado
    $stmt = $pdo->prepare("UPDATE images SET name=?, imageURL=? WHERE id=?");
    // Ejecuta la consulta con los nuevos valores
    if ($stmt->execute([$name, $imageURL, $id])) {
        echo json_encode(array("message" => "Imagen actualizada con éxito."));
    } else {
        echo json_encode(array("error" => "Error al actualizar la imagen."));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Procesa la solicitud DELETE para eliminar una imagen por su ID
    $id = $_GET['id'];
    // Prepara la consulta para eliminar la imagen con el ID proporcionado
    $stmt = $pdo->prepare("DELETE FROM images WHERE id=?");
    // Ejecuta la consulta con el ID proporcionado
    if ($stmt->execute([$id])) {
        echo json_encode(array("message" => "Imagen eliminada con éxito."));
    } else {
        echo json_encode(array("error" => "Error al eliminar la imagen."));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'login') {
    // Procesa la solicitud POST para iniciar sesión
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $password = $data['password'];
    
    // Prepara la consulta para verificar las credenciales del usuario
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username=? AND password_hash=?");
    // Ejecuta la consulta con el nombre de usuario y la contraseña proporcionados
    $stmt->execute([$username, $password]);
    
    if ($stmt->rowCount() === 1) {
        // Si se encuentra un usuario con las credenciales proporcionadas, inicia sesión
        $_SESSION['username'] = $username;
        echo json_encode(array("message" => "Inicio de sesión exitoso."));
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        echo json_encode(array("error" => "Credenciales incorrectas."));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'logout') {
    // Procesa la solicitud POST para cerrar sesión
    session_unset();
    session_destroy();
    echo json_encode(array("message" => "Sesión cerrada correctamente."));
}

// Cierra la conexión PDO
$pdo = null;

/*
CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    imageURL VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX name_index (name),
    INDEX imageURL_index (imageURL)
);
---------------------------------------------------
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX username_index (username)
);

*/

?>
