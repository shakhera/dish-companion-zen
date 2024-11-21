import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const UpperNavbar = () => {
  return (
    <section className="bg-neutral text-base-100 px-3">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="btn btn-ghost text-sm md:text-xl font-serif">
          DISHCOMPANIONZEN
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart size={24} />
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">0 Items</span>
              <span className="text-info">Total: $00</span>
              <div className="card-actions">
                <button className="btn btn-neutral btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpperNavbar;
