
import PostService from "./PostService.js"


class PostControler{
    // async create(req, res){
    //     try{
     //       // post request c картинкой 
    //         const post = await PostService.create(req.body, req.files.picture)
    //           res.json(post)
    //     }
    //     catch(e){
    //         res.status(500).json(e)
    //     }
    // }
    async create(req, res){
        try{
            // post request без картинки
            const post = await PostService.create(req.body)
              res.json(post)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async  getAll(req, res){
        try{
            const post = await PostService.getAll()
            return res.json(post)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async  getOne(req, res){
        try{
            const post = await PostService.getOne(req.params.id)
            return res.json(post)

        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async  update(req, res){
        try{
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async  delete(req, res){
        try{
            const post = await PostService.delete(req.params.id)
            return  res.json(post)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new PostControler()