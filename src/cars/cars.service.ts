import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { UpdateCarDto,  CreateCarDto  } from './dto/index';
/* Inyeccion de dependencia: Servicio de Cars.
* Los servicio alojan la lógica de negocio de tal manera que sea 
reutilizable mediante inyección de dependencias.
* En este caso CarsService es el servicio encargado de obtener nuestra lista completa de cars y de buscar
un auto en especifico mediante su indice
*/
@Injectable()
export class CarsService {
    private cars: Car[] = [{
        id: uuid(),
        brand: 'Toyota' ,
        model: 'Corolla'
    },{
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    }
];
    findAll(){
        return this.cars
    }
    findOneById(id: string){
        /* Array.prototype.find(): El método find() devuelve el valor del primer elemento 
        del array que cumple la función de prueba proporcionada. */
       const car =  this.cars.find(car => car.id === id);
       if (!car) throw new NotFoundException(`Car with id ${id} not found`);
       return car
    }
    create(createCarDto: CreateCarDto){
        const car: Car = {
            id: uuid(), 
            brand: createCarDto.brand,  
            model:createCarDto.model, 
        }
        this.cars.push(car);    
        return car; 
    }
    update(id: string, updateCarDto : UpdateCarDto){

    }
}
