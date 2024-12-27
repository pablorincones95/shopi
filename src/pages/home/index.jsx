import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/product-detail";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Layout>
      <h1 className="mb-5 text-4xl">Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export { Home };
