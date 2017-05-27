## Angular basics
### Repositorio base para el taller de conceptos básicos de angular.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

__Primero asegúrate de tener los prerrequisitos:__
 1. [Node](https://nodejs.org/en/) >= 6 y [npm](https://www.npmjs.com/) >=3 
 2. [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3
 3. Editor (atom, sublime, vscode) o el de tu preferencia
 
**Si todo está correcto:**
 1. Clona o descarga este repositorio
 2. En la terminal navega a la carpeta donde quedo el proyeto ej. (cd Documents/meetup_pioneras) 
 2. Dentro de la carpeta del repositorio ejecuta `$ npm install`
 3. Por último, levanta el servidor con `$ ng serve -o`

**Se abrirá  el navegador y si aparece el mensaje:** "Dogs Angular basics" ya estamos listas para crear nuestro primer componente :ok_woman:

**Archivos incluidos en el repositorio**
El repositorio tiene incluido un servicio _dog.service.ts_, este nos proporcionará lo necesario para avanzar en el componente, así como la clase _dog.ts_ para la estructura de datos.

**Generar dogs.component con Angular CLI:**

1. Ejecuta en la terminal `ng g component dogs`, esto generará una subcarpeta con los archivos necesarios.
2. En el archivo _dogs.component.ts_ podremos ver la estructura básica de un componente, esto lo genera Angular CLI.
3. Colocaremos los import necesarios
- `import { Dog } from '../dog';`
- `import { DogService } from '../dog.service';`
4. En el constructor definimos una variable privada de tipo **Dogservice** `private dogService: DogService`
5. El la clase definimos las variables que utilizaremos
- `selectedDog: Dog;` _esta variable tipo Dog almacenará la selección del usuario_
- `dogs: Dog[];` _esta variabe tipo array Dog almacenará los datos resultantes de la promesa de servicio DogService_
5. Realizamos el método que hará el resolve a la promesa que devuelve el llamado a `GetDogs()` (este es el método del servicio)
```
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
