import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../Layouts/layout";
import Slider from "react-slick";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserContext } from "../contexts/userContext";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;
export const DetailProduct = () => {
  const mySwal = withReactContent(Swal);
  const redirect = useNavigate();
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const { user, token } = useContext(UserContext);

  useEffect(() => {
    fetch(`${HOST_SERVER}/products/${idProduct}`)
      .then((res) => res.json())
      .then(({ data, ok }) => (ok ? setProduct(data) : null))
      .catch((err) => console.error(err));
  }, []);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const handleDelete = () => {
    mySwal
      .fire({
        title: "Estas seguro de eliminar el producto:",
        text: product.name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`${HOST_SERVER}/products/${idProduct}`, {
            method: "DELETE",
            headers: {
              'Authorization': token,
              'Content-Type' : 'application/json'
            },
          })
            .then((res) => res.json())
            .then(({ ok, message }) => {

              console.log({ ok, message })
              mySwal
                .fire({
                  title: message,
                  icon: ok ? "success" : "error",
                  timer: 2000,
                  showConfirmButton: false,
                })
                .then(() => {
                  ok ? redirect("/") : redirect("/login");
                });
            });
        }
      });
  };

  return (
    <Layout>
      <Container className="my-5">
        <Row>
          {user._id && user.rol === "ADMIN" ? (
            <Col md={12} className="d-flex justify-content-end gap-2">
              <Button as={Link} to={`/products/update/${product._id}`}>
                Editar
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </Col>
          ) : null}

          <Slider
            dots={true}
            speed={500}
            slidesToShow={1}
            className="card card-body mb-3 col-md-4"
          >
            {product.images
              ? product.images.map((image, index) => {
                  return (
                    <div key={index}>
                      <Image
                        style={{ height: "200px" }}
                        src={image.url}
                        alt=""
                        className="m-auto"
                      />
                    </div>
                  );
                })
              : null}
          </Slider>

          <div className="col-md-6">
            <h5 className="text-primary">{product.name}</h5>
            <p className="text-muted">{product.description}</p>
            <span className="text-success mx-2 display-6">
              {formatterPeso.format(
                product.price - (product.price * product.discount) / 100
              )}
            </span>
            <p>
              <span className="text-primary text-decoration-line-through mx-3">
                {formatterPeso.format(product.price)}
              </span>
              <span
                className="text-danger fw-bold"
                style={{ fontSize: ".7rem" }}
              >
                {product.discount}% OFF
              </span>
            </p>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
