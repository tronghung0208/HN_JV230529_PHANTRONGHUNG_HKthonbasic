import React, { useState } from "react";
import ProductItem from "./ProductItem";
import CartTable from "./CartTable";

function Home() {
  const [products, setProduct] = useState([
    {
      name: "BST 50 - Áo thun nam",
      price: "100",
      description: "Áo thun nam nữ form...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp1.jfif5c29ba45-be68-4381-8ae9-42ddfc1b4135?alt=media&token=fc203279-226a-4b55-aee9-d42ccaba382a",
      id: 1,
    },
    {
      name: "Áo SADBOI SADTAGRAM",
      price: "150",
      description: "Áo thun tay lỡ...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp5.jfif72209208-1024-41fd-a631-4d2e3a161d13?alt=media&token=0ec0e2e1-7b72-405e-96ef-ff3e2da0fa0f",
      id: 2,
    },
    {
      name: "Áo local brand BEEYANBUY",
      price: "200",
      description: "Áo thun phông nam...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp2.jfife8a16bc6-4b7b-4274-a8ba-a436602c8f4c?alt=media&token=170c1a60-d08e-4a90-918c-ca8ffda155d5",
      id: 3,
    },
    {
      name: "Đồ bộ quần áo ",
      price: "400",
      description: "Quần áo thun chất liệu...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp3.jfifa57042ca-f8fa-4beb-8d4d-35680bd06356?alt=media&token=6d375504-e950-4f73-aa50-7fabbeb7b098",
      id: 4,
    },
    {
      name: "Áo ba lỗ nam",
      price: "125",
      description: "Áo ba lỗ nam Guzado...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp4.jfifd9a07b88-12c8-4b63-ab27-c42630049259?alt=media&token=ec24c6c2-e1bb-4eeb-ba63-031d1c20fa22",
      id: 5,
    },
    {
      name: "Quần nam Guzado GMSR05",
      price: "250",
      description: "Quần đùi nam Guzado GMSR05...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp6.jfifa45d18ae-0a2c-4cac-85d2-2cd5e058ccd5?alt=media&token=6ae7efbc-5134-4336-9a78-4b884966fdca",
      id: 6,
    },
    {
      name: "Bộ thể thao nam ",
      price: "500",
      description: "Bộ quần áo thể thao nam ...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp7.jfifaa927bcb-fa59-4533-8d83-1adce771c77d?alt=media&token=a7a58d52-d3c3-44e4-83f8-920baaa1ef14",
      id: 7,
    },
    {
      name: "Bộ quần áo nam ROUGH",
      price: "450",
      description: "Bộ quần áo thể thao...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp8.jfif22d4493f-459d-46b3-8345-e0c95eadcd59?alt=media&token=2b30583e-eeaf-45c2-85ee-71890a9b1d39",
      id: 8,
    },
    {
      name: "Áo sơ mi nam nữ",
      price: "290",
      description: "Áo sơ mi nam nữ dài tay...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp9.png7d52c352-b08f-44c0-81bb-272052c47633?alt=media&token=4bff2837-34b6-491e-8e70-e5395848a0fd",
      id: 9,
    },
    {
      name: "Áo sơ mi trắng",
      price: "350",
      description: "Áo sơ mi trắng trơn unisex...",
      status: true,
      image:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp10.jfif84d71d7a-d55f-43a7-af0c-24b321e85c63?alt=media&token=238f7824-ab0f-409b-ba18-252ce3495331",
      id: 10,
    },
  ]);
  return (
    <div>
      {/* START HEADER */}
      <header className="header">
        <div className="container">
          <div className="header-menu">
            <div className="header-menu-1">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Privacy Pollcy</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
              </ul>
            </div>
            <div className="header-menu-2">
              <ul>
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-twitter" />
                </li>
                <li>
                  <i className="fa-brands fa-pinterest" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-youtube" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* END HEADER */}

      {/* START MAIN */}
      <main className="main">
        <section className="box-1">
          <div className="container">
            <nav className="nav-menu">
              <p>ACADEMY_SHOP</p>
              <ul className="menu-product">
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">PAGES</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
              </ul>
              <ul className="menu-icon">
                <li>
                  <i className="fa-solid fa-user" />
                </li>
                <li>
                  <i className="fa-solid fa-magnifying-glass" />
                </li>
                <li>
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* START PRODUCT ITEM */}
        <ProductItem products={products} />
        {/* END PRODUCT ITEM */}
      </main>
      {/* END MAIN */}

      {/* START TABLE CART */}

      <CartTable />
      {/* END TABLE CART */}
      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <div className="footer-menu-1">
              <div className="menu-first">
                <div>
                  <span>TECH</span>LIGHT
                </div>
                <ul>
                  <li>
                    Technology is constantly evolving, shaping the way we live,
                    work, and interact with the word around us.
                  </li>
                  <li>Advanced Hackathon 01</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="footer-menu-1-center">
                <p>MORE FROM US</p>
                <ul>
                  <li>Iphone</li>
                  <li>MacBook</li>
                  <li>Best Laptop</li>
                  <li>Laptop Coupons</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="footer-menu-1-center">
                <p>ABOUT US</p>
                <ul>
                  <li>Advertise</li>
                  <li>More About Us</li>
                  <li>Newsletter</li>
                  <li>Licensing</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="menu-last">
                <p>POLICIES</p>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Cookies</li>
                  <li>Copyright</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
