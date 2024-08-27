function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = btoa(texto); // Función simple de encriptación base64
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;
    try {
        let textoDesencriptado = atob(textoEncriptado); // Desencriptación base64
        document.getElementById("outputText").value = textoDesencriptado;
    } catch (e) {
        alert("El texto no está encriptado correctamente.");
    }
}
