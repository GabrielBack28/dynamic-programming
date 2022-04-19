import * as fs from 'fs';
import { resolve } from 'path';

export interface Data {
  superFactorial: Array<number>,
  dinamic: Array<number>
}

export class File {
  readonly filePath: string = '';
  constructor(readonly fileName: string = 'times.txt') {
    this.filePath = resolve(__dirname, fileName);
    this.createFileIfNotExist();
  }

  write(data: Data) {
    const titleSuperFactorial = 'Super Factorial (ms)';
    const titleDinamic = 'Dinamic  (ms)';

    let content = `${titleSuperFactorial}  |  ${titleDinamic}\n`;

    const maxInterations = Math.max(data.superFactorial.length, data.dinamic.length);
    for (let i = 0; i < maxInterations; i++) {
      const superLenght = data.superFactorial[i].toString().length;
      const superSpace = ' '.repeat(titleSuperFactorial.length - superLenght);
      content += `${data.superFactorial[i]}${superSpace}  |  ${data.dinamic[i]}\n`;
    }

    const end = '-'.repeat(titleSuperFactorial.length + titleDinamic.length + 5);
    content += `\n${end}\n`;
    const medianSuper = data.superFactorial.reduce((a, b) => a + b, 0) / data.superFactorial.length;
    const medianDinamic = data.dinamic.reduce((a, b) => a + b, 0) / data.dinamic.length;

    const superSpace = ' '.repeat(titleSuperFactorial.length - medianSuper.toString().length);
    content += 'Média\n';

    content += `${medianSuper}${superSpace}  |  ${medianDinamic}\n`;

    fs.writeFileSync(this.filePath, content, 'utf-8');
  }

  private createFileIfNotExist(): void {
    const fielExist = fs.existsSync(this.filePath);

    if (!fielExist) {
      fs.writeFileSync(this.filePath, '', 'utf-8');
    }
  }
}