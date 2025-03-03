const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id) => {
    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    return new Promise( (resolve, reject) => {
        (empleado) 
        ? resolve(empleado)
        : reject(`No existe empleado con id ${id}`);
    });

    
};

const getSalario = (id) => {
    const salario = salarios.find( (s) => s.id === id)?.salario;

    return new Promise( (resolove, reject) => {
        (salario)
        ? resolove(salario)
        : reject(`No existe salario con id ${id}`);
    })
}

const getIndoUsuario = async() => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (err) {
        throw err;
    }

    
}

const id = 3;

getIndoUsuario(id)
    .then( msg => {
        console.log('TODO BIEN!');
        console.log(msg);
    })
    .catch( err => {
        console.log('TODO MAL!');
        console.log(err);
    });