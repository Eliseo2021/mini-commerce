import React from "react";
import { ListProducts } from "./ListProducts";

export default function Home() {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/bg.jpg" className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">MERN Stack</h5>
                        <p className="card-text lead fs-2">Mini Commcerce
                        </p>
                    </div>
                </div>
            </div>
            <ListProducts />
        </div>
    );
};