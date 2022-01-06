import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({
    title: "",
    price: "",
    pictureUrl: "",
    id: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", id);

    try {
      getDoc(docRef)
        .then((doc) => {
          const data = {
            id: doc.id,
            ...doc.data(),
          };
          setItem(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setError(true);
    }
  }, [id]);

  return (
    <div className="item-detail-card mt-5">
      {error ? <p>Ha habido un error</p> : null}
      {item.title !== "" || !loading ? <ItemDetail item={item} /> : <Loader />}
    </div>
  );
}
