import bootstrap from "./utils/bootstrap.js";
export function crearModal(){
  //obtener contenedor
  const contenedorModal = document.getElementById('modal');

  //Construir elementos para formulario
  const fields = [
    { label: 'Nombre', id: 'input_nombre', type: 'text', className: 'modal__input' },
    { label: 'Apellido', id: 'input_apellido', type: 'text', className: 'modal__input' },
    { label: 'Email', id: 'input_email', type: 'email', className: 'modal__input' }
  ];

  //Contenido del formulario en blanco
  contenedorModal.innerHTML = '';
  //Creacion y configuracion del formulario
  const form = document.createElement('form');
  form.action = '#';
  form.className = 'modal-form';

  fields.forEach(ele => {
    const apartados = document.createElement('div');

    //rellenar los apartados del formulario
    const label = document.createElement('label');
    label.htmlFor = ele.id;
    label.className = 'modal__label';
    label.textContent = `${ele.label}:`;

    const input = document.createElement('input');
    input.type = ele.type;
    input.id = ele.id;
    input.className = ele.className;
    input.required = true;

    //Agregar label e input al div  
    apartados.appendChild(label);
    apartados.appendChild(input);
    form.appendChild(apartados

    );
  });
//Creamos boton enviar
  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.id = 'enviar_registro';
  submit.className = 'enviar';
  submit.textContent = 'Enviar';

//Agregar boton al formulario
  form.appendChild(submit);
  contenedorModal.appendChild(form);

  // Manejar envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aqui se registra usuario
  });

}