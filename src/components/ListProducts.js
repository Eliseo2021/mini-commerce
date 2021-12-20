import React, { useState, useEffect } from "react";

export const ListProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);


  const ShowProducts = () => {
    return (
      <>
        {filter.map((product, index) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={index} >
                  <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Listado de Productos
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {<ShowProducts />}
        </div>
      </div>
    </div>
  );
};

