const IMAGE_ITEMS = [
    {
        src: require("../assets/img/image1.jpg"),
        alt: "image-1",
    },
    {
        src: require("../assets/img/image2.jpg"),
        alt: "image-2",
    },
    {
        src: require("../assets/img/image3.jpg"),
        alt: "image-3",
    },
];

/*fetch("http://139.224.252.240:9000/getImage/")
    .then(res => res.text())
    .then(res =>{ IMAGE_ITEMS = res})
    .catch(err=>console.log(err))*/

export default IMAGE_ITEMS;