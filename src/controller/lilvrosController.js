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

    static atualizar = (req, res)=>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController