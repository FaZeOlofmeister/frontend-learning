import image1 from "../assets/img/image1.jpg"
import image2 from "../assets/img/image2.jpg"
import image3 from "../assets/img/image3.jpg"

const IMAGE_ITEMS = [
    {
        src: image1,
        alt: "image-1",
    },
    {
        src: image2,
        alt: "image-2",
    },
    {
        src: image3,
        alt: "image-3",
    },
];

/*fetch("http://139.224.252.240:9000/getImage/")
    .then(res => res.text())
    .then(res =>{ IMAGE_ITEMS = res})
    .catch(err=>console.log(err))*/

export default IMAGE_ITEMS;