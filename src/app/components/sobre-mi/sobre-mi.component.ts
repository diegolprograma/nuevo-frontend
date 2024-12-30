import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  persona: persona = new persona("","","");
  
  constructor(public personaService: PersonaService){}
 
  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next: (data: persona[]) => { 
        console.log('Datos recibidos:', data); // Verifica los datos en consola
        this.persona = data[0]; // Accede al primer elemento
      },
      error: (err) => {
        console.error('Error al cargar persona:', err);
        console.log(this.persona.img); // Verifica que la ruta de la imagen sea correcta

      }
    });
  }
  
  

}
