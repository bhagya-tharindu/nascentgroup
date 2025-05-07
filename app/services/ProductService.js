const getAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "force-cache",
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (id) => {
  try {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default { getAllProducts, getProductById };
