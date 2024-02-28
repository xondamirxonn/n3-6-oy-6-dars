import data from "./data/data";
import { Card } from "./components/card/card";

import { ProductContainer } from "./components/product-container/product-container";

function App() {


  return (
    <div className="container-uz ">
      <ProductContainer />
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-1 sm:gap-4 ">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
