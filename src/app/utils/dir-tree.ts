const remote = require('electron').remote;
const electronFs = remote.require('fs');

export default class DirTree {
    path: string;
    name: any;
    items: any[];
    constructor(path: string, name = null){
        this.path = path;
        this.name = name;
        this.items = [];
    }

    build = () => {
        this.items = DirTree.readDir(this.path);
        return this.items;
    }

    static readDir(path: string): any {
        const fileArray: any = [];

        electronFs.readdirSync(path).forEach((file: any) => {
            var fileInfo = new DirTree(`${path}\\${file}`, file);

            var stat = electronFs.statSync(fileInfo.path);

            if (stat.isDirectory()){
                fileInfo.items = DirTree.readDir(fileInfo.path);
            }

            fileArray.push(fileInfo);
        })

        return fileArray;
    }
}