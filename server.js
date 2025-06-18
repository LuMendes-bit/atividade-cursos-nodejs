const express = require('express');
const app = express();
app.use(express.json())
const cursos = []

app.get('/cursos', function(request, response) {
    response.send(cursos);
})

app.get('/cursos/:id', function(request, response) {
    const posicaoCurso = request.params.id
    const nomeCurso = cursos[posicaoCurso]

    response.json({
        menssagem: "Curso foi encontrado com sucesso",
        nome: nomeCurso
    })
})

app.post('/enviar-cursos', function(request, response) {
    const nomeCurso = request.body.nome
    cursos.push(nomeCurso)

    response.json({
        menssagem: "Curso foi enviado com sucesso!.",
        nome: nomeCurso
    })
})

app.put('/atualizar-cursos/:id', function(request, response) {
    response.send('Rota para atualizar o o curso')
})

app.delete('/deletar-cursos/:id', function(request, response) {
    const posicaoCurso = request.params.id
    const nomeCurso = cursos[posicaoCurso]
    cursos.splice(posicaoCurso, 1)

    response.json({
        menssagem: "Curso removido com sucesso!.",
        nome: nomeCurso
    })
})

app.listen(3003, function() {
    console.log('Servidor rodando com sucesso')
})