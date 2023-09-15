import React from "react";
import { Card } from "./Card";
function Home() {

  const business_types = ["Garden Center","Cafe","Clothing Store","Electronics Store","Fitness Center","Bookstore","Eco Store","Pet Supplies","Art Gallery","Shoe Store","Furniture","Flower Shop","Restuarant","Sports Shop"]

  const campaigns = [
    {
      "title": "The Green Garden Store",
      "desc": "We specialize in all things gardening, from seeds to tools.",
      "type": "Garden Center",
      "Discount": "10%",
      "Number_of_products": "20",
      "offer_validity": "20",
    },
    {
      "title": "Café Delights",
      "desc": "A cozy café serving the finest coffee and pastries in town.",
      "type": "Cafe",
      "Discount": "10%",
      "Number_of_products": "205",
      "offer_validity": "15",
    },
    {
      "title": "Fashion Forward Boutique",
      "desc": "Discover the latest fashion trends at our boutique.",
      "type": "Clothing Store",
      "Discount": "10%",
      "Number_of_products": "20",
      "offer_validity": "25",
    },
    {
      "title": "ElectroTech Hub",
      "desc": "Your one-stop shop for cutting-edge electronics and gadgets.",
      "type": "Electronics Store",
      "Discount": "10%",
      "Number_of_products": "202",
      "offer_validity": "18",
    },
    {
      "title": "FitLife Wellness Center",
      "desc": "Achieve your fitness goals with our state-of-the-art gym and trainers.",
      "type": "Fitness Center",
      "Discount": "10%",
      "Number_of_products": "20",
      "offer_validity": "22",
    },
    {
      "title": "Bookworm's Paradise",
      "desc": "A book lover's haven with a vast collection of novels and literature.",
      "type": "Bookstore",
      "Discount": "10%",
      "Number_of_products": "205",
      "offer_validity": "10",
    },
    {
      "title": "Eco-Friendly Living",
      "desc": "Your source for eco-conscious products and sustainable living.",
      "type": "Eco Store",
      "Discount": "10%",
      "Number_of_products": "208",
      "offer_validity": "14",
    },
    {
      "title": "Pet Paradise",
      "desc": "Where your pets' happiness is our top priority.",
      "type": "Pet Supplies",
      "Discount": "10%",
      "Number_of_products": "208",
      "offer_validity": "30",
    },
    {
      "title": "Artistic Expressions Gallery",
      "desc": "A showcase of breathtaking art from talented local artists.",
      "type": "Art Gallery",
      "Discount": "10%",
      "Number_of_products": "20",
      "offer_validity": "8",
    },
    {
      "title": "Tech Savvy Solutions",
      "desc": "Your trusted partner for IT solutions and support.",
      "type": "IT Services",
      "Discount": "10%",
      "Number_of_products": "15",
      "offer_validity": "12",
    },
    {
      "title": "Healthy Harvest Market",
      "desc": "We bring you fresh, organic produce straight from local farms.",
      "type": "Grocery Store",
      "Discount": "10%",
      "Number_of_products": "205",
      "offer_validity": "5",
    },
    {
      "title": "SoleMate Shoe Emporium",
      "desc": "Step into style with our wide selection of footwear.",
      "type": "Shoe Store",
      "Discount": "10%",
      "Number_of_products": "204",
      "offer_validity": "19",
    },
    {
      "title": "Peak Performance Fitness",
      "desc": "Unlock your potential with personalized fitness programs.",
      "type": "Fitness Center",
      "Discount": "10%",
      "Number_of_products": "202",
      "offer_validity": "31",
    },
    {
      "title": "Tech Wizard Electronics",
      "desc": "Stay ahead with the latest gadgets and tech innovations.",
      "type": "Electronics Store",
      "Discount": "10%",
      "Number_of_products": "82",
      "offer_validity": "5",
    },
    {
      "title": "Blossom Boutique Florist",
      "desc": "Elegant floral arrangements for every occasion.",
      "type": "Flower Shop",
      "Discount": "NA",
      "Number_of_products": "35",
      "offer_validity": "NA",
    },
    {
      "title": "Casa Italia Ristorante",
      "desc": "Experience the flavors of Italy in every bite.",
      "type": "Italian Restaurant",
      "Discount": "10%",
      "Number_of_products": "208",
      "offer_validity": "23",
    },
    {
      "title": "Pet Pampering Spa",
      "desc": "Treat your pets to a day of luxury grooming and relaxation.",
      "type": "Pet Grooming",
      "Discount": "15%",
      "Number_of_products": "7",
      "offer_validity": "17",
    },
    {
      "title": "All Sports Gear Shop",
      "desc": "Get ready to play with our wide range of sports equipment.",
      "type": "Sporting Goods Store",
      "Discount": "20%",
      "Number_of_products": "59",
      "offer_validity": "13",
    },
    {
      "title": "Home Sweet Home Furniture",
      "desc": "Furnishing your home with style and comfort.",
      "type": "Furniture Store",
      "Discount": "15%",
      "Number_of_products": "26",
      "offer_validity": "7",
    }
  ];
  return (
    <>
      
      <div className="cardContainer container mt-5">
        {campaigns.map((campaign, key) => (
          <Card campaign={campaign} key={key} />
        ))}
      </div>
    </>
  );
}

export default Home;
