import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const productRef = collection(db, "productos");
    const q = categoryId
      ? query(productRef, where("category", "==", categoryId))
      : productRef;

    try {
      getDocs(q)
        .then((response) => {
          const products = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(products);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setError(true);
    }
  }, [categoryId]);

  return (
    <>
      <section id="items">
        <div className="container">
          <div className="center">
            {error ? <p>Ha habido un error</p> : null}
            <div className="items-content mt-5">
              <h2>Nuestros productos</h2>
              <hr />
              {!loading ? (
                <div className="item-list">
                  <ItemList items={items} />
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
