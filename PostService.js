import Post from "./Post.js"
 import FileService from "./fileService.js";


class PostService {
    async  create(post, picture) {
          const filename = FileService.savefile(picture)
        const createdpost = await Post.create({...post, filename})
        return createdpost
    }

    async getAll() {
            const posts = await Post.find();
            return posts
    }
    async getOne(id) {
   
       if (!id) {
                throw new Error("id not enter")
            }
            const post = await Post.findById(id)
            return post 
    }
    async update(post) {
        
            if (!post._id) {
                res.status(400).json({ message: "id not  entered" })
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
            return updatedPost
    
    }
    async delete(id) {
       
           
            if (!id) {
                res.status(400).json({ message: "id not  entered" })
            }
            const post = await Post.findByIdAndDelete(id);
            return post
    
    }
}
export default new PostService