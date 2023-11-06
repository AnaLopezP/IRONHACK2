//definimos el objeto
let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: 'Bob'
  };
  
  //mostramos en pantalla los elementos del objeto
  for (let key in product) {
    console.log(`${key}: ${product[key]}`)
  };
  
  //eliminamos el dueño anterior y cambiamos el que atributo de que no funciona a que ya funciona 
  delete product.previousOwner;
  product.doesItWork = true;
  
  
  for (let key in product) {
    console.log(`${key}: ${product[key]}`)
  }
  
  // ponemos el descuento si el precio es mayor de 100 y cambiamos en ese caso el precio por el nuevo     
  if (product.price > 100) {
    product.discountPercentage = 10
    product.price = product.price - product.price*product.discountPercentage/100
  }
  
  for (let key in product) {
    console.log(`${key}: ${product[key]}`)
  }
  
  if ('discountPercentage'in product) {
    console.log(`Tenemos auriculares de oferta, por solo ${product.price}$. Es un ${product.discountPercentage}% menos`)
  }