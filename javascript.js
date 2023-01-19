function limpiarFormulario()
{
    let campos=document.querySelectorAll("input[type='text'],input[type='number']");
    for(let x=0;x<campos.lenght;x++){
        campos[x].value='';
    }
}
let empleados=[]
function agregarEmpleados()
{  
    let personal=[];
    
    personal.push(document.getElementByid('txtNombre').value);
    personal.push(document.getElementByid('txtApellido').value);
    personal.push(document.getElementByid('intEdad').value);
    personal.push(document.getElementByid('Sueldo').value);
    
    let validarFormulario=true;
    for(let x=0;x<personal.lenght;x++){
        if(personal[x]=="")
        {
            validarFormulario=false;
        }

    }
    if(validarFormulario)
    {

    empleados.push(personal);
    let datos=JSON.stringify(empleados);
    localStorage.setItem('listadoEmpleados', datos);
    limpiarFormulario();
    mostrarEmpleados();
    } 
    else
    {
    alert('Por favor llene los campos requeridos')

}
}
function mostrarEmpleados (){
    let llenarTabla=document.getElementById('Datos')
    llenarTabla.innerHTML=" ";
    

    for(x=0;x<empleados.lenght; x++ ){
    
        tr=document.createElement('tr');
        personal=empleados[x];

    for(y=0; personal.lenght;y++){
        celda=personal[y];
        td=document.createElement('td');
        td.innerHTML=celda;
        tr.appenChild(td);

    }
    llenarTabla.appenChild(tr);
    
    
}
}
datos=localStorage.getItem('listadoEmpleados');
if(datos!="null")
{
    empleados=JSON.parse(datos);
    mostrarEmpleados();
}