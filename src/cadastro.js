async function cadastrar(){
    const nome = document.getElementById('nome').ariaValueMax;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://locahost:3000/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ nome, email, senha})
        });

        const data = await response.json();
        document.getElementById('msg').innerText = data.massage || data.error;
    } catch (err){
        document.getElementById('msg'.innerText = 'Erro no cadastro');
    }
}