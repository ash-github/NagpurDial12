import React from "react";
import "./Footer.css"; // Import the CSS file

const popularSearches = [
  // { text: "Body Massage Centres", url: "/body-massage-centres" },
  { text: "Cinema Halls", url: "/movies" },
  { text: "Schools", url: "/educationschools" },
  { text: "Beauty Spas", url: "/beautyparlour" },
  { text: "Dermatologists", url: "/hospital" },
  { text: "Hospitals", url: "/hospital" },
  { text: "Wedding Planner", url: "/malls" },
  { text: "Gyms", url: "/gym" },
  { text: "Beauty Parlours", url: "/beautyparlour" },
  { text: "Estate Agents", url: "/estaeagents" },
  { text: "Banquet Halls", url: "/banquithall" },
  { text: "ENT Doctors", url: "/hospital" },
  { text: "Bridal Requisite", url: "/jewellary" },
  { text: "spa & Massag", url: "/beautyparlour" },
  // { text: "Sexologist Doctors", url: "/sexologist-doctors" },
  { text: "Neurologists", url: "/hospital" },
  { text: "Gynaecologist & Obstetrician", url: "/hospital" },
  { text: "Doctors", url: "/hospital" },
  { text: "Train Ticket", url: "/Train" },
  { text: "Booking Agents", url: "/flight" },
  { text: "Travel Agents", url: "/flight" },
  { text: "Paying Guest Accommodations", url: "/pghotels" },
  { text: "General Physician Doctors", url: "/hospital" },
  { text: "Dentists", url: "/hospital" },
  { text: "Orthopaedic Doctors", url: "/hospital" },
  // { text: "Chemists", url: "/chemists" },
  // { text: "Motor Training Schools", url: "/motor-training-schools" },
  // { text: "Gastroenterologists", url: "/gastroenterologists" },
  { text: "Car Rental", url: "/carservices" },
  // { text: "Salons", url: "/salons" },
  { text: "Courier Services", url: "/couriers" },
  // { text: "Dance Classes", url: "/dance-classes" },
  // { text: "Pathology Labs", url: "/pathology-labs" },
  // { text: "Taxi Services", url: "/taxi-services" },
  // { text: "Cake Shops", url: "/cake-shops" },
  { text: "AC Repair & Services", url: "/acrepairshops" },
  // { text: "Mobile Phone Dealers", url: "/mobile-phone-dealers" },
  { text: "Pet Shops", url: "/petshops" },
  // { text: "Dmart", url: "/dmart" },
  { text: "Packers And Movers", url: "/packers&movers" },
  // { text: "Psychiatrists", url: "/psychiatrists" },
  // { text: "Dharamshalas", url: "/dharamshalas" },
  // { text: "Urologist Doctors", url: "/urologist-doctors" },
  // { text: "Bakeries", url: "/bakeries" },
  // { text: "Bicycle Dealers", url: "/bicycle-dealers" },
  // { text: "Coffee Shops", url: "/coffee-shops" },
  // { text: "Paediatricians", url: "/paediatricians" },
  // { text: "Sonography Centres", url: "/sonography-centres" },
  // { text: "Yoga Classes", url: "/yoga-classes" },
  { text: "Hostels", url: "/hotel" },
  { text: "Cardiologists", url: "/hospital" },
  { text: "Electrical Shops", url: "/electrician" },
  // { text: "Skin Care Clinics", url: "/skin-care-clinics" },
  // { text: "Diagnostic Centres", url: "/diagnostic-centres" },
  // { text: "Homeopathic Doctors", url: "/homeopathic-doctors" },
  // { text: "Physiotherapists", url: "/physiotherapists" },
  { text: "Photo Studios", url: "/photostudio" },
  // { text: "Plumbers", url: "/plumbers" },
  // { text: "Music Classes", url: "/music-classes" },
  { text: "Electricians", url: "/electrician" },
  // { text: "Sports Goods Dealers", url: "/sports-goods-dealers" },
  // { text: "Shoe Dealers", url: "/shoe-dealers" },
  { text: " Men Hair Stylists", url: "/menhairstyle" },
  // { text: "Gift Shops", url: "/gift-shops" },
  // { text: "Ophthalmologists", url: "/ophthalmologists" },
  { text: "Car Repair & Services", url: "/carrepairs" },
  // { text: "Ayurvedic Doctors", url: "/ayurvedic-doctors" },
  { text: "Eye Clinics", url: "/hospital" },
  { text: "Restaurants", url: "/restaurant" },
  // { text: "Carpenters", url: "/carpenters" },
  { text: "Jewellery Showrooms", url: "/jewellary" },
  // { text: "Cooks On Hire", url: "/cooks-on-hire" },
  // { text: "Stationery Shops", url: "/stationery-shops" },
  // { text: "Nephrologists", url: "/nephrologists" },
  { text: "Caterers", url: "/cateres" },
  { text: "Interior Designers", url: "/homefurniture" },
  // { text: "Rehabilitation Centers", url: "/rehabilitation-centers" },
  { text: "Grocery Stores", url: "/grocery" },
  { text: "Banks ATM", url: "/account" },
  { text: "5 Star Hotels", url: "/hotel" },
  { text: "Hotels", url: "/hotel" },
  // { text: "Resorts", url: "/resorts" },
  { text: "Plastic Surgeons", url: "/hospital" },
];

function PopularSearch() {
  return (
    <div className="Container">
      <p className="social">
        <strong>Popular Searches:</strong>
        <p style={{ color: "grey", fontSize: "12px" }}>
          {popularSearches.map((search, index) => (
            <React.Fragment key={index}>
              <a href={search.url} className="link">
                {search.text}
              </a>
              {index < popularSearches.length - 1 && " | "}
            </React.Fragment>
          ))}
        </p>
      </p>
    </div>
  );
}

export default PopularSearch;
