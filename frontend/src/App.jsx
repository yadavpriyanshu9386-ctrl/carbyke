import { useMemo, useState } from "react";
import { vehicles } from "./data/vehicles.js";
import VehicleModal from "./components/vehicles/VehicleModal.jsx";
import SellPage from "./pages/SellPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RentPage from "./pages/RentPage.jsx";
import ReviewsPage from "./components/HumBurger/ReviewsPage.jsx";
import ContactPage from "./components/HumBurger/ContactPage.jsx";
import MyListings from "./pages/MyListings.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BuyPage from "./pages/BuyPage.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import LoginModal from "./components/auth/LoginModal.jsx";

function App() {
  const [page, setPage] = useState("Home");
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All brands");
  const [fuel, setFuel] = useState("All fuels");
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [sort, setSort] = useState("Latest First");
  const [wishlist, setWishlist] = useState([]);
  const [selected, setSelected] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toast, setToast] = useState("");
  const [view, setView] = useState("grid");
  const [sellType, setSellType] = useState("Car");
  const [sellSubmitted, setSellSubmitted] = useState(false);
  const [rentDays, setRentDays] = useState("Daily");
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    let list = vehicles.filter(
      (v) =>
        (type === "All" || v.type === type) &&
        (brand === "All brands" || v.brand === brand) &&
        (fuel === "All fuels" || v.fuel === fuel) &&
        v.price <= maxPrice &&
        `${v.name} ${v.brand} ${v.model} ${v.city}`
          .toLowerCase()
          .includes(search.toLowerCase()),
    );
    if (page === "Wishlist") list = list.filter((v) => wishlist.includes(v.id));
    if (sort === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    if (sort === "Lowest KM") list.sort((a, b) => a.km - b.km);
    if (sort === "Latest First") list.sort((a, b) => b.year - a.year);
    return list;
  }, [type, brand, fuel, maxPrice, search, sort, page, wishlist]);

  const toggleWish = (id) => {
    setWishlist((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
    );
    setToast(
      wishlist.includes(id) ? "Removed from wishlist" : "Added to wishlist",
    );
    setTimeout(() => setToast(""), 1800);
  };
  const navigate = (p) => {
  if (
    !isLoggedIn &&
    (p === "Wishlist" || p === "My Listings")
  ) {
    setToast("Please login to continue");
    setLoginOpen(true);
    setTimeout(() => setToast(""), 1800);
    return;
  }

  setPage(p);
  setSelected(null);
  setMobileMenu(false);

  if (p !== "Buy" && p !== "Wishlist") {
    setSearch("");
    setType("All");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar
        page={page}
        navigate={navigate}
        wishlistCount={wishlist.length}
        onLogin={() => setLoginOpen(true)}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        isLoggedIn={isLoggedIn}
      />

      {page === "Home" && (
        <HomePage navigate={navigate} setSearch={setSearch} />
      )}

      {(page === "Buy" || page === "Wishlist") && (
        <BuyPage
          page={page}
          type={type}
          setType={setType}
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          fuel={fuel}
          setFuel={setFuel}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filtered={filtered}
          wishlist={wishlist}
          toggleWish={toggleWish}
          setSelected={setSelected}
          setToast={setToast}
          navigate={navigate}
        />
      )}
      {page === "Sell" && (
        <SellPage
          sellType={sellType}
          setSellType={setSellType}
          submitted={sellSubmitted}
          setSubmitted={setSellSubmitted}
        />
      )}
      {page === "Rent" && (
        <RentPage days={rentDays} setDays={setRentDays} vehicles={vehicles} />
      )}
      {page === "My Listings" && <MyListings onSell={() => navigate("Sell")} />}
      {page === "About Us" && <AboutPage />}
      {page === "Reviews" && <ReviewsPage />}
      {page === "Contact Us" && <ContactPage />}

      <Footer navigate={navigate} />

      {selected && (
        <VehicleModal
          vehicle={selected}
          wished={wishlist.includes(selected.id)}
          onWish={() => toggleWish(selected.id)}
          onClose={() => setSelected(null)}
        />
      )}
      {loginOpen && (
        <LoginModal onClose={() => setLoginOpen(false)} setToast={setToast} />
      )}
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-xl border border-line bg-[#101d28] px-5 py-3 text-sm shadow-2xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
