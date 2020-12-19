export interface EJSFileItem {
    path: string;
    fullPath: string;
    name: string;
    isDirectory: boolean;
    ejsFile?: EJSFile;
}

export interface EJSFile {
    content: string;
    out?: string;
}

export interface EJSDirTree {
    file: EJSFileItem,
    child: EJSDirTree[];
}

export interface WebkitFile extends File {
    webkitRelativePath: string;
}