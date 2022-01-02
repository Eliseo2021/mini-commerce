*********************************************
**   	cambicar rama: carrito de compra	   **
**********************************************
git branch -r
git remote show origin

------------camciar rama git-----------------
guardar cambios: git status	
git checkout -b feature/carrito-de-compra
git add . git commit -m 'carrito-de-compra'
----------------------
push
git push --set-upstream origen feature/carrito-de-compra

-------------------------

cambios:
---------dependencias install-------
Dexie: 
npm install dexie	
npm install dexie-react-hoks
-----------------------------------------


--------CAMBIO DE COMPONENTES y NUEVOS DIRECTORIOS Y ARCHIVOS--------
organizar carpetas segun campos a trabajar:
Crear carpeta Products: 
- ListProducts y Product
- crear archivo AlertProduct.js
------COMPONENTES--drop----
Crear carpeta ShoppingCart
- ShoppingCart.js
- ShoppingCartItem.js
------COMPONENTES--dB----
Crear carpeta app:
Crear carpeta db (para base de datos):
- crear archivo db.js
Crear carpeta services :
- crear archivo storageServices.js para trabajar con las db


--------------------funcion reduce-----------------------------

Array.prototype.reduce()

El método reduce() ejecuta una función reductora sobre cada elemento 
de un array, devolviendo como resultado un único valor.

para los productos agregrados al carrito es utlizada para acumular el total de precios.
// myarray?.reduce(acumulador, elementoarray)
//return acumulador + elementoarray.elemento
//,0 valor inicial del acumulador

const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price
    },0)
    setTotalPrice(total)
  }