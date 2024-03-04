import { Categories } from "@/api/category";
import { Products } from "@/api/products";

export { default } from "./category";

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;


   const categoryCtrl = new Categories();
   const responseCategory = await categoryCtrl.getBySlug(category);


  
   
  // if (!responseCategory || !responseCategory.success) {
  //   return { notFound: true };
  // }

  // const productsCtrl = new Products();
  // const productsList = await productsCtrl.list({ category_id: responseCategory.data.id });

  const productCtrl = new Products();
  const responseProduct = await productCtrl.getProductsByCategory(
    responseCategory[0].id
  );


  return {
    props: {
      category: responseCategory,
      products: responseProduct,
    },
  };
}
