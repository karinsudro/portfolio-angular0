import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modalregister',
  templateUrl: './modalregister.component.html',
  styleUrls: ['./modalregister.component.css']
})

export class ModalregisterComponent implements OnInit {
  register_form !:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///grupo de controles para el form de modal login
    this.register_form= this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
   })
   }

  ngOnInit(): void {
  }

  //estos son todos métodos
  get Username(){
    return this.register_form.get("username");
   }
   get UsernameInvalid() {
     return this.Username?.touched && !this.Username?.valid;
   }
 
  get Mail(){
   return this.register_form.get("email");
  }
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get Password(){
    return this.register_form.get("password");
  }
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  
  onSubmit(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.register_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.register_form.markAllAsTouched(); 
    }
 
  }


}
