import { Injectable, NotFoundException } from '@nestjs/common';
/* Inyeccion de dependencia: Servicio de Cars.
* Los servicio alojan la lógica de negocio de tal manera que sea 
reutilizable mediante inyección de dependencias.
* En este caso CarsService es el servicio encargado de obtener nuestra lista completa de cars y de buscar
un auto en especifico mediante su indice
*/
@Injectable()
export class CarsService {
    private cars = [{
        id: 1,
        brand: 'Toyota' ,
        model: 'Corolla'
    },{
        id: 2,
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: 3,
        brand: 'Jeep',
        model: 'Cherokee'
    }
];
    findAll(){
        return this.cars
    }
    findOneById(id: number){
        /* Array.prototype.find(): El método find() devuelve el valor del primer elemento 
        del array que cumple la función de prueba proporcionada. */
       const car =  this.cars.find(car => car.id === id);
       if (!car) throw new NotFoundException(`Car with id ${id} not found`);
       return car
    }
}
