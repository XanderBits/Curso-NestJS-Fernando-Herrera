import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

/*Utilizamos el decorador @Controller para indicar que nuestra clase es un Nest controller y asi poder manejar
todas las peticiones recibidas y enviar las respectivas respuestas. Al utilizar este decorador e escribir la
cadena 'cars' como argumento automaticamente nest esta creando una ruta para poder manejar todas 
las request, en este caso tendriamos algo parecido a "localhost:PORT/cars"
*/
@Controller('cars')
export class CarsController {
    constructor( private readonly carsService: CarsService
    ) {}
   /* @Get: Decorador para indicar que nuestro metodo sera el encargado de todas las request de tipo get que
   lleguen a nuestra ruta raiz, en este caso  "localhost:PORT/cars" 
   * Si queremos que sea por otra ruta debemos especificarla en el argumento del decorador.
   */
   @Get()
    getAllCars(){
        return this.carsService.findAll();
    }
    @Get(':id')
    getCarById(@Param( 'id', ParseUUIDPipe)  id: string){
            console.log({ id })
            return this.carsService.findOneById(id);
    }
    //@Post Para peticiones de tipo POST, para crear data.
    @Post()
    createCar(@Body() body : any){
        return body 
    }
    //@Patch Para modificar data.
    @Patch(':id')
    updateCar(
        @Param ('id', ParseIntPipe) id: number,
        @Body() body : any 
    )
        {
            return body; 
        }

    //@Delete Para eliminar data.
    @Delete(':id')
    deleteCar(@Param( 'id', ParseIntPipe)  id: number){
        return {
            method: 'delete',
            id
        };
    }



}
