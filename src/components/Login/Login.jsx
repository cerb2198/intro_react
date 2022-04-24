import { useState } from "react";
  
import styles from "./login.module.css"; //Así se cargan los estilos.

import imgUser from "../../resources/User_Circle.png"; //Así cargo yo las imagenes en imgUser puedes colocar cualquier nombre.

const Login = () => {

  const [datos, setDatos] = useState({
    correo:"",
    contrasena:""
  });

  //Nuestro estado para mostrar o no un mensaje:
  const [mostrar, setMostrar] = useState(false);

  const cambioFormulario = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value}
    )
  }

  const mostrarMensaje = (e) => {
    e.preventDefault();

    if(mostrar===false){
      setMostrar(true);
    }else{
      setMostrar(false);
    }

  };

  return (
    //Tengo un elemento HTML tipo div, este yo lo uso para que sea el contenedor, este div ocupara todo el ancho y largo de la pantalla.
    //Para mirar el css metete al archivo login.css que esta en la carpeta Login.
    <div className={styles.contenedor}>
      <form className={styles.form__login}>
        <img className="imagen" src={imgUser}></img> {/*Así se vincula la imagen:<img src={nombre_del_import}></img>*/}
        {/*Si quieres puedes darles clases a los elementos de acá para abajo, por si quieres estilizarlos mas...*/}
        {"Bienvenido" }
        <label>Correo</label>
        <input name="correo" type="text" onChange={cambioFormulario}></input>
        <label>Contraseña</label>
        <input name="contrasena" type="password"  onChange={cambioFormulario}></input>
        <button onClick={mostrarMensaje}>Enviar</button>
      </form>

      {/*FORMATO DE VISTA CONDICIONAL, ES EQUIVALENTE A UN IF ELSE*/}
      {mostrar ?
        <form className={styles.form__login}>
          <img className="imagen" src={imgUser}></img> {/*Así se vincula la imagen:<img src={nombre_del_import}></img>*/}
          {/*Si quieres puedes darles clases a los elementos de acá para abajo, por si quieres estilizarlos mas...*/}
          {"Bienvenido" }
          <label>Correo</label>
          <input name="correo" type="text" onChange={cambioFormulario}></input>
          <label>Contraseña</label>
          <input name="contrasena" type="password"  onChange={cambioFormulario}></input>
          <button onClick={mostrarMensaje}>Enviar</button>
        </form>
        :
        null
      }
    </div> 
    
  );
}

export default Login;
