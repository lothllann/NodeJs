import express from "express";
import db from "./config/dbConnect.js";
import ds from "./config/dbConnect.js"

db.on("erro", console.log.bind(console, 'Erro de Conexão'));
db.once("once", ()=>{
    console.log('Conecão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());

const livros = [
    {id:1, "titulo": "Senhor dos Aneis"},
    {id:2, "titulo": "O Hobbit"}
]

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
   })

app.post('/livros', (req, res)=>{
    livros.push(req.body);
    res.status(201).send('Livro Cadastrado');
})

app.put('/livros/:id', (req, res)=>{
 let index = buscaLivro(req.params.id);
 livros[index].titulo = req.body.titulo;
 res.json(livros);
})

app.delete('/livros/:id', (req, res)=>{
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`)

   })


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;