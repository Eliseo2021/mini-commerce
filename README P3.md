********************************************
**	cambicar rama: react-router-dom	  **
********************************************

------------camciar rama git-----------------
git checkout develope 

git checkout -b feature/react-router-dom

guardar cambios: git status	
git add . 
git commit -m 'react-router-dom'

 

--------COMPONENTES nuevos --------
carpeta views: Home, ProductView y PurchaseView

app-sevices- productsServices

components-Products- ProductDetail
components-ShoppingCart- DetailCart

-Información de Producto
-Finalizar compra


---------dependencias install react-router-dom -------
Route: tambien añade 3 propiedades: history (para movermos al "/"), location y match (usamos el params para "/id")
index.js:
import { BrowserRouter } from 'react-router-dom'; //para trabajar con el historial del navegador
<BrowserRouter>	</BrowserRouter>

app.js:
 <Switch> // controla las vistas
      <Route path={"/"} exact component={Home} /> //path : la ruta en la que se renderiza el componente


-----modularizar servicios-----
Archivos repositorios de db:

component 1:
export const getAllProducts = async () => {
    return api.get(routes.getAllProducts())
}
compont 2:
getProductById(id)
            .then((productFromDB) => setProductDetail(productFromDB))
            .catch((err) => console.log(err));


---------JS-----------