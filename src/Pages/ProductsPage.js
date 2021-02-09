import React from "react";
import Card from "../Components/Card"
class ProductsPage extends React.Component {
  render() {
    return (
      <div className='cards'>
        <h1> Tools To Help You Be Safe </h1>
        <h3>Stopping the spread of a global virus is easier than you think, it can be just as simple as controlling a common cold when you have the right protection and here at Covid Safety Recourse Center™ we have everything you need.</h3>
        <Card
          img='https://m.media-amazon.com/images/I/71sI3mGIyWL._AC_UL640_QL65_.jpg'
          title='Artnaturals&#8482; Alcohol Based Hand Sanitizer Gel'
          price='$11.99 '
          paragraph="Scent Free & Alcohol Free" />
        <Card
          img='https://m.media-amazon.com/images/I/81iSUwPh00L._AC_UL640_QL65_.jpg'
          title='50pk Kids Tie Dye Face Mask'
          price='$17.99'
          paragraph="Fun For Kids & Breathable" />
        <Card
          img='https://m.media-amazon.com/images/I/612W7eMeagL._AC_UL640_QL65_.jpg'
          title='EO&#8482; Organic Fresh Lavnder Hand Sanitizer Pray'
          price='$20.99'
          paragraph="All Natural Organic Lavender Scent" />
        <Card
          img='https://m.media-amazon.com/images/I/612mnKC7HoL._AC_UL640_QL65_.jpg'
          title='6 Pack Face Covering Sleeve'
          price='$15.99'
          paragraph="Easy To Wear & Breathable" />
        <Card
          img='https://m.media-amazon.com/images/I/51ITiMJ0lML._AC_UL640_QL65_.jpg'
          title='Anti-Fog Clear Face Sheild'
          price='$30.99'
          paragraph="Unisex, Anti-Fog, Reusable Face Sheild W/ Glasses Frame" />
        <Card
          img='https://m.media-amazon.com/images/I/51X6FbyYCKL._AC_UL640_QL65_.jpg'
          title='100pk MedPride&#8482; Nitrile Gloves'
          price='$25.99'
          paragraph="One Size Fits All Medical Grade Gloves" />
        <Card
          img='https://m.media-amazon.com/images/I/61sbKaCImAL._AC_UL640_QL65_.jpg'
          title='50 pk Adult Three Ply Face Mask'
          price='$13.99'
          paragraph="Comfortable Ear Loops W/ Carbon Filter" />
        <Card
          img='https://m.media-amazon.com/images/I/71x5l26q9jL._AC_UL640_QL65_.jpg'
          title='Travel Sized 75% Alcohol Hand Wipes'
          price='$24.99'
          paragraph="12pk 120 Sheets Hand Wipes" />
        <Card
          img='https://m.media-amazon.com/images/I/61wQFDDdTlL._AC_UL640_QL65_.jpg'
          title='Cloth Face Mask With Clear Window'
          price='$20.99'
          paragraph="lear PlexiGlass Window For Deaf/Hearing Impaired" />
        <Card
          img='https://m.media-amazon.com/images/I/41HZ42f+tnL._AC_UL640_QL65_.jpg'
          title='1Gal Froggys Simply Sanitizer'
          price='$35.99'
          paragraph="80% Alcohol & Great For Refills" />
        <Card
          img='https://m.media-amazon.com/images/I/61VuZ+Xk+0L._AC_UL640_QL65_.jpg'
          title='20pk Mask Filters'
          price='$10.99'
          paragraph="Easy To Apply In Most Face Mask" />
        <Card
          img='https://m.media-amazon.com/images/I/71rVbh7mLUL._AC_UL640_QL65_.jpg'
          title='50pk KN95 Face Mask'
          price='$95.99'
          paragraph="Breathable & Comfortable W/ Nose Wire" />
      </div>
    );
  }
}
export default ProductsPage;