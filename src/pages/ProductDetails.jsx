import React from "react";
import BreadCrumb from "../pages/BreadCrumb";
import ProductImg from "../assets/img/Product Image.png";

const ProductDetails = () => {
  return (
    <>
      <BreadCrumb title="PRODUCT DETAILS" />
      <section className="ProductDetails">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <figure>
                <img
                  src={ProductImg}
                  style={{ width: "50%" }}
                  alt="productImg"
                />
              </figure>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                ab quae hic illo commodi. Ea dicta saepe velit deserunt
                provident! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Deleniti asperiores nemo magnam alias ullam a nulla
                tempora exercitationem maxime explicabo excepturi, illum dolores
                eaque accusamus dolorum quod repudiandae, ea nostrum corporis
                quibusdam. Excepturi saepe pariatur, fugiat nam inventore ut
                officiis dolores aperiam distinctio consequatur suscipit illum
                voluptatem! Facere quibusdam labore porro, voluptates magnam vel
                similique ipsam eius molestiae soluta laudantium quae unde sequi
                nam accusamus architecto. Ullam sapiente eligendi voluptate quis
                dolores magni, obcaecati nemo vero maiores vel. Enim eveniet
                omnis adipisci optio expedita voluptatum harum quis voluptatibus
                debitis nemo recusandae asperiores aut beatae veritatis sapiente
                doloremque laudantium, ratione nesciunt exercitationem cumque?
                At suscipit cupiditate doloribus reprehenderit ipsum adipisci
                numquam amet quos quibusdam quidem! Iste at beatae harum commodi
                quos saepe enim pariatur deleniti ut fuga eveniet iure quo ipsa
                in asperiores, debitis voluptate, quas, odio quibusdam itaque
                reiciendis sunt molestias? Accusantium dolores exercitationem
                nisi eos laudantium aliquam ipsum ad, dolore ex ea rerum
                consequuntur eum nulla maiores repellat. Quo sequi est omnis ad?
                Expedita, commodi. Nisi quis laudantium inventore ducimus
                blanditiis esse, ipsam excepturi voluptate sunt repellendus
                architecto nemo quos rem nesciunt, alias cum a? Ipsam aliquid
                itaque expedita maiores officiis error deleniti quis? Libero
                ipsam expedita veritatis temporibus.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
