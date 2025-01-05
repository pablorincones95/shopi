import { useContext } from "react";
import { Card } from "../../components/card";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/product-detail";
import { ShopingCartContext } from "../../context";

const Home = () => {
  const { setSearchByTitle, filteredProducts } = useContext(ShopingCartContext);

  const renderView = () => {
    if (filteredProducts?.length > 0) {
      return filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ));
    } else {
      // eslint-disable-next-line react/no-unescaped-entities
      return <div>We don't have anything :( </div>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusvie Products</h1>
      </div>

      <div>
        <input
          className="mb-4 rounded-lg border border-black p-2 w-80 focus:outline-none"
          type="text"
          placeholder="Search a product"
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export { Home };
