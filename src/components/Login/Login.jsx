
import "./login.css"; //Así se cargan los estilos.

import imgUser from "../../resources/User_Circle.png"; //Así cargo yo las imagenes en imgUser puedes colocar cualquier nombre.

const Login = () => {
  return (
    //Tengo un elemento HTML tipo div, este yo lo uso para que sea el contenedor, este div ocupara todo el ancho y largo de la pantalla.
    //Para mirar el css metete al archivo login.css que esta en la carpeta Login.
    <div className="contenedor">


      <form className="form__login">
        <img className="imagen" src={imgUser}></img> {/*Así se vincula la imagen:<img src={nombre_del_import}></img>*/}
        {/*Si quieres puedes darles clases a los elementos de acá para abajo, por si quieres estilizarlos mas...*/}
        <label>Correo</label>
        <input type="text"></input>
        <label>Contraseña</label>
        <input type="password"></input>
        <button>Enviar</button>
      </form>

      <form className="form__login">
        <img className="imagen" src={imgUser}></img> {/*Así se vincula la imagen:<img src={nombre_del_import}></img>*/}
        {/*Si quieres puedes darles clases a los elementos de acá para abajo, por si quieres estilizarlos mas...*/}
        <label>Correo</label>
        <input type="text"></input>
        <label>Contraseña</label>
        <input type="password"></input>
        <button>Enviar</button>
      </form>

    </div> 
    
  );
}

export default Login;
