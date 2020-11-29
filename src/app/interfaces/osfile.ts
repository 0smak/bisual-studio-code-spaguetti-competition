export interface OSFileItem {
    path: string;
    name: string;
    isDirectory: boolean;
    osFile?: OSFile;
}

export interface OSFile {
    content: string;
    out?: string;
}

export interface OSDirTree {
    file: OSFileItem,
    child: OSDirTree[];
}

export interface WebkitFile extends File {
    webkitRelativePath: string;
}