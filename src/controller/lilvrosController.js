import livros from "../models/Livro.js";


class LivroController {

    static listar = (req, res) => {
        livros.find((erro, livros) => {
            res.status(200).json(livros);
        })
    }

    static cadastrar = (req, res) =>{
        let livro = new livros(req.body);
        livro.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }
}

export default LivroController