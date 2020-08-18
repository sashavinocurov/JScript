function calculateBill(total, tax = 0.13, tip = 0.15) {
    //use this way
  //   tax = tax || 0.13;
  //   tip = tip || 0.15;
    // or this way
  //   if(tax === undefiend){
  //     tax = 0.13;
  //   }
  //   if(tip === undefiend){
      
  //   }
    return total + (total * tax)+(total * tip);
  }
  
  const totalBill = calculateBill(100);
  console.log(totalBill);
  const totalBill2 = calculateBill(150, undefiend, 0.25);
  console.log(totalBill2);


/////////////////

