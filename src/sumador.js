class Auto{

  constructor()
  {
    Auto.posy = 0;
    Auto.posx = 0;
    Auto.direccion ='N';
  }

  aumentarPos(orientacion)
  {
    if(orientacion == "N")
    {
      Auto.posy +=1;
    }
    if(orientacion == "S")
    {
      Auto.posy -=1;
    }
    else if (orientacion == "E"){
      Auto.posx +=1;
    }
    else if (orientacion == "O"){
      Auto.posx -=1;
    }
  }
  elegirDireccion(mov)
  {
    let orientacion = ["O","N","E","S"]
    if(mov == "A")
    {
      this.aumentarPos(Auto.direccion)
    }
    if(mov == "D")
    {
      let cambio = orientacion.indexOf(Auto.direccion)
      if(cambio==3)
      {
        cambio = -1;
      }
      Auto.direccion = orientacion[cambio + 1]
    }
    if(mov == "I")
    {
      let cambio = orientacion.indexOf(Auto.direccion)
      if(cambio==0)
      {
        cambio = 4;
      }
      Auto.direccion = orientacion[cambio - 1]
    }
  }
  ejecutar(mov) 
  {
    for(let i=0; i<mov.length; i++)
    {
      this.elegirDireccion(mov[i])
      if(Auto.posy < 0 || Auto.posx < 0 || Auto.posy > 9 || Auto.posx > 9)
      {
        return "se salio de bordes"
      }
    }

    return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.direccion
  }
}
export default Auto;