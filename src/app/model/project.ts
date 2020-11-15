import { developer } from './developer';

export class project {
    id: number
    name: string;
    dependencies: string[] = [];
    developers: developer[] = [];
}