import axios from "axios";

export const getCategories = async () => {
  const data = await axios.get("http://localhost:5000/categories");

  // ************ As NextJs recommend us to use the app router instead of page router so we are not able to use getStaticProps method on app router. And the latest version make it easy to cached data when first time fetched the data  ========== "This request should be cached until manually invalidated. Similar to getStaticProps. force-cache is the default and can be omitted. fetch(URL, { cache: 'force-cache' })""; ****************//

  return data?.data?.categories;
};

export const getSubCategories = async () => {
  const data = await axios.get("http://localhost:5000/subcategories");
  return data?.data?.subcategories;
};
export const getDuas = async () => {
  const data = await axios.get("http://localhost:5000/dua");
  const duas = data?.data?.duas;
  const indvidualDua = duas.filter((item: any) => item.dua_name_en !== null && duas.dua_name_bn !== null)
  return indvidualDua;
};

getSubCategories();
