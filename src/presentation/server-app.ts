import { CreateTable } from "../domain/use-cases/create-table.uses-case";
import { SaveFile } from "../domain/use-cases/save-file.uses-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}
export class ServerApp {

    static run({base, limit, showTable, name, destination}: RunOptions) {
        console.log('Server running...');
            const table = new CreateTable().execute({base, limit});
            const wasCreated = new SaveFile()
                .execute({
                    fileContent: `${name}`, 
                    fileDestination: `${destination}/${name}-${ base }`,
                });

        if ( showTable) console.log(table);
        ( wasCreated )
            ? console.log('File Created!')
            : console.error('File not created!');

    }

}