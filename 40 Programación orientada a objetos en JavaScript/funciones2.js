function Clinete(nombre, saldo)
{
    this.nombre = nombre;
    this.saldo = saldo;
    this.depositar = depositar;
    this.extraer = extraer;
}

function depositar(dinero)
{
    this.saldo = this.saldo + dinero;
}

function extraer(dinero)
{
    this.saldo = this.saldo - dinero;
}

function cliente(nombre, saldo)
{
    this.nombre = nombre;
    this.saldo = saldo;
    this.depositar = depositar;
    this.extraer = extraer;
}

