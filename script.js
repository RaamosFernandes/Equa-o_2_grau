
   
const  $ form  =  document . querySelector ( "formulário" ) ;
const  $ a  =  documento . querySelector ( "#a" ) ;
const  $ b  =  documento . querySelector ( "#b" ) ;
const  $ c  =  documento . querySelector ( "#c" ) ;
const  $ x1  =  documento . querySelector ( "# x1" ) ;
const  $ x2  =  documento . querySelector ( "# x2" ) ;

function  bhaskara ( )  {
  const  a  =  $ a . valor ;
  const  b  =  $ b . valor ;
  const  c  =  $ c . valor ;

  const  delta  =  b  *  b  -  4  *  a  *  c ;

  if  ( ! a  ||  ! b  ||  ! c )  {
    createAlert ( " Insira os valores de a, seja c" ) ;
  }  else  if  ( a  ==  0 )  {
    createAlert ( "O valor de <strong> a </strong>, deve ser diferente de 0" ) ;
  }  else  if  ( delta  <  0 )  {
    createAlert ( "Sem raízes reais" ) ;
  }  else  {
    const  x1  =  ( + b  +  Math . sqrt ( delta ) )  /  ( 2  *  a ) ;
    const  x2  =  ( - b  -  Math . sqrt ( delta ) )  /  ( 2  *  a ) ;
    $ x1 . valor  =  x1 ;
    $ x2 . valor  =  x2 ;
  }
}

function  createAlert ( msg )  {
  documento
    . querySelector ( "body" )
    . insertAdjacentHTML ( "beforebegin" ,  `<div class = 'alert'> $ { msg } </div>` ) ;

  setTimeout ( function  ( )  {
    deleteAlert ( ) ;
  } ,  3000 ) ;
}

function  deleteAlert ( )  {
  const  list  =  document . querySelectorAll ( ".alert" ) ;
  para  ( item const  da lista ) {   
    item . remove ( ) ;
  }
}

$ form . addEventListener ( "enviar" ,  função  ( evento )  {
  evento . preventDefault ( ) ;
  bhaskara ( ) ;
} ) ;
