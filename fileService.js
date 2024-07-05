import * as uuid from "uuid"
import * as path from "path"



class FileService {

    savefile(file){
        // копирует и перемещает картинку в static в корне проекта
        try{
        const filename= uuid.v4() + ".jpg"
        const  filePath = path.resolve("static", filename);
        file.mv(filePath)
        return filename
    }
    catch(e){
        console.log(e)
    }
}

}
export default new FileService()