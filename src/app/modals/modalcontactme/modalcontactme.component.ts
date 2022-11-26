import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalcontactme',
  templateUrl: './modalcontactme.component.html',
  styleUrls: ['./modalcontactme.component.css']
})

export class ModalcontactmeComponent implements OnInit {
  contact_form !: FormGroup;

  
  constructor(private formBuilder: FormBuilder) { 
    /* let mensajes=this.contact_form.value as  */

      this.contact_form= this.formBuilder.group({
      nombre:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      mensaje:['',Validators.required]
   })
  }

  ngOnInit(): void {
  }


//estos son todos métodos
get Nombre(){
  return this.contact_form.get("nombre");
 }
get Mail(){
  return this.contact_form.get("email");
 }
 get MailInvalid() {
   return this.Mail?.touched && !this.Mail?.valid;
 }
 get Mensaje(){
  return this.contact_form.get("mensaje");
 }



 /* get f(){
  return this.contact_form.controls;
} */
 
submit(){
  console.log(this.contact_form.value);
}



  /* onSubmit(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.contact_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.contact_form.markAllAsTouched(); 
    }
 
  } */
}
