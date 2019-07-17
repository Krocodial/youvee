import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
let documents = fs.knownFolders.currentApp();
let path = fs.path.join(documents.path, "shared/questions.json");
let file = fs.File.fromPath(path);


@Injectable()
export class FileReaderService {

    constructor() { }

    readJSON(path: string): Promise<Object> {
        
        console.log(file);
        file.readText().then((res) => {
            console.log(res);
        });
        let jsonFile = documents.getFile('/shared/questions.json');
        console.log(jsonFile);
        return new Promise<Object>((resolve, reject) => {
            jsonFile.readText().then((content: string) => {
                console.log(content);
                let data = <Array<Object>>JSON.parse(content);
                resolve(data);
            })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}