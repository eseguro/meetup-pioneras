## Angular basics
### Repositorio base para el taller de conceptos básicos de angular.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

__Primero asegúrate de tener los prerrequisitos:__
 1. [Node](https://nodejs.org/en/) >= 6 y [npm](https://www.npmjs.com/) >=3 
 2. [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3
 3. Editor (atom, sublime, vscode) o el de tu preferencia
 
**Si todo está correcto:**
 1. Clona o descarga este repositorio
 2. En la terminal navega a la carpeta donde quedo el proyecto ej. ($`cd Documents/meetup_pioneras`) 
 2. Dentro de la carpeta del repositorio ejecuta `$ npm install`
 3. Por último, levanta el servidor con $`ng serve -o`

**Se abrirá  el navegador y si aparece el mensaje:** "Dogs Angular basics" ya estamos listas para crear nuestro primer componente :ok_woman:

**Archivos incluidos en el repositorio**
El repositorio tiene incluido un servicio _dog.service.ts_, este nos proporcionará lo necesario para avanzar en el componente, así como la clase _dog.ts_ para la estructura de datos.

**Generar dogs.component con Angular CLI:**
1. En la terminal navega a la carpeta _src\app_ ej($`cd src`, $`cd app`)
2. Ejecuta en la terminal $`ng g component dogs`, esto generará una subcarpeta con los archivos necesarios.
3. En el archivo _dogs.component.ts_ podremos ver la estructura básica de un componente, esto lo genera Angular CLI.
4. Colocaremos los import necesarios
```typescript 
import { Dog } from '../dog';
import { DogService } from '../dog.service';
```
5. En el constructor definimos una variable privada de tipo DogService 
```typescript 
private dogService: DogService
```
6. En la clase definimos las variables que utilizaremos
```typescript 
selectedDog: Dog; //esta variable tipo Dog almacenará el dog que el usuario seleccione
dogs: Dog[]; //esta variable tipo array Dog almacenará los datos resultantes de la promesa de servicio DogService
```
7. En la clase definimos el método que obtendrá los datos del método `GetDogs()` de nuestro servicio.
```typescript 
getDogs(): void {
    this.dogService.getDogs().then(dogs => this.dogs = dogs);
  }
```
8. Indiquemos que  el:
```typescript 
ngOnInit()
``` 
va a retornar tipo void  y dentro del ngOnInit invocamos nuestro método;
```typescript
getDogs() 
```
9. En la clase definimos el método que almacenará el dog seleccionado por el usuario en nuesta variable `this.selectedDog`
```typescript
onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }
```
