import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart · Cart Counter
  const [count, setCount] = useState(0);

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail · Show Products
  const [productToShow, setProductToShow] = useState({});

  //Shopping Cart · Add Products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get Products by Title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get Products by Category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products").then((response) =>
      response.json().then((data) => setItems(data))
    );
  }, []);

  const filterByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filterByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterByTitleAndCategory = (items, searchByTitle, searchByCategory) => {
    return filterByCategory(items, searchByCategory).filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    switch (searchType) {
      case "BY_TITLE":
        return filterByTitle(items, searchByTitle);
      case "BY_CATEGORY":
        return filterByCategory(items, searchByCategory);
      case "BY_TITLE_AND_CATEGORY":
        return filterByTitleAndCategory(items, searchByTitle, searchByCategory);
      default:
        return items;
    }
  };

  useEffect(() => {
    const filteredItemsResult = filterBy(
      searchByTitle && searchByCategory
        ? "BY_TITLE_AND_CATEGORY"
        : searchByTitle
        ? "BY_TITLE"
        : searchByCategory
        ? "BY_CATEGORY"
        : null,
      items,
      searchByTitle,
      searchByCategory
    );

    setFilteredItems(filteredItemsResult);
  }, [items, searchByTitle, searchByCategory]);

  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
