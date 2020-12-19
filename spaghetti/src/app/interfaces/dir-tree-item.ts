export type DirTreeItem = Directory | File;

interface BaseItem {
    path: string;
    name: string;
    size: number;
}

export interface Directory extends BaseItem{
    type: 'directory';
    children: DirTreeItem[];
}
export interface File extends BaseItem{
    type: 'file';
    size: number;
    extension: string;
}