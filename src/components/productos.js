
import ImgUno from "../assets/img/GalaxyS22Ultra.jpg";
import ImgDos from "../assets/img/GalaxyZFlip4.jpg";
import ImgTres from "../assets/img/GalaxyZFold4.jpg";
import ImgCuatro from "../assets/img/GalaxyS22Plus.jpg";
import ImgCinco from "../assets/img/GalaxyZFlip35G.jpg";
import ImgSeis from "../assets/img/GalaxyNote20.jpg";

export default function productos() {
    const itemNames = [
        {
          id: "1",
          nombre: "Galaxy S22 Ultra",
          precio: "7,650",
          stock: 85,
          categoría: "Celulares",
          imgUrl: ImgUno,
        },
        {
          id: "2",
          nombre: "Galaxy Z Flip4",
          precio: "7,350",
          stock: 23,
          categoría: "Celulares",
          imgUrl: ImgDos,
        },
        {
          id: "3",
          precio: "10,092",
          nombre: "Galaxy Z Fold4",
          stock: 34,
          categoría: "Celulares",
          imgUrl: ImgTres,
        },
        {
          id: "4",
          precio: "8,074",
          nombre: "Galaxy S22+",
          stock: 10,
          categoría: "Celulares",
          imgUrl: ImgCuatro,
        },
        {
          id: "5",
          precio: "6,092",
          nombre: "Galaxy Z Flip3 5G",
          stock: 14,
          categoría: "Celulares",
          imgUrl: ImgCinco,
        },
        {
          id: "6",
          precio: "5,540",
          nombre: "Galaxy Note20",
          stock: 34,
          categoría: "Celulares",
          imgUrl: ImgSeis,
        },
      ];
      console.log(itemNames);
      console.log("itemNames");
  return ( itemNames );
}