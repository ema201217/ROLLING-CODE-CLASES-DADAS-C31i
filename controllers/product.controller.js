const products = [
  {
    id: 1,
    name: "Samsung A33",
    description:
      "Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
    price: 4,
    discount: 2,
    images: [
      {
        id: 1,
        primary: true,
        url: "https://http2.mlstatic.com/D_NQ_NP_766689-MLA50999944832_082022-O.webp",
      },
      {
        id: 2,
        primary: false,
        url: "https://http2.mlstatic.com/D_NQ_NP_720182-MLA50999944834_082022-O.webp",
      },
      {
        id: 3,
        primary: false,
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_686525-MLA50999928890_082022-F.webp",
      },
    ],
  },
  {
    id: 23213,
    name: "Samsung Galaxy s22 5g",
    description:
      "Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
    price: 300999,
    discount: 33,
    images: [
      {
        primary: false,
        url: "https://http2.mlstatic.com/D_NQ_NP_801065-MLA52415349406_112022-O.webp",
      },
      {
        primary: true,
        url: "https://http2.mlstatic.com/D_NQ_NP_792522-MLA52415345541_112022-O.webp",
      },
      {
        primary: false,
        url: "https://http2.mlstatic.com/D_NQ_NP_802170-MLA52415344522_112022-O.webp",
      },
    ],
  },
  {
    name: "Apple iPhone 11 (64 GB) - Negro",
    price: 349999,
    discount: 20,
    description:
      "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).",
    images: [
      {
        id: 1,
        primary: true,
        url: "https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.webp",
      },
      {
        id: 2,
        primary: false,
        url: "https://http2.mlstatic.com/D_NQ_NP_702018-MLA46115014331_052021-O.webp",
      },
      {
        id: 3,
        primary: false,
        url: "https://http2.mlstatic.com/D_NQ_NP_971922-MLA46114829752_052021-O.webp",
      },
    ],
    id: 23218,
  },
]; 

module.exports = {
  getProducts: (req, res) => {
    const { q } = req.query;
    if (q) {
      const productsFilter = products.filter((product) =>
        product.name.toLowerCase().includes(q.toLowerCase())
      );
      return res.json(productsFilter);
    }
    res.json(products);
  },
  detailProduct: (req, res) => {
    const productFound = products.find(
      (product) => product.id === parseInt(req.params.idProduct)
    );
    if (!productFound) {
      return res.send("El producto no existe");
    }
    res.send(productFound);
  },
  createProduct: (req, res) => {
    res.json({ mensaje: "Creando producto" });
  },
  deleteProduct: (req,res) => {
    // req.query
    // req.body
    // req.params
    res.json({mensaje:"Producto eliminado"})
  },
  updateProduct: (req,res) => {
    res.json({mensaje:"Producto editado"})
  }
};