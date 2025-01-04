import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/product-detail";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Layout>
      <h1 className="font-medium text-xl">Home</h1>
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
