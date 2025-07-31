import React from 'react';

import { ServiciosCustomer } from "./components/ServiciosCustomers/ServiciosCustomer";
import { ServiciosFast } from "./components/ServiciosFast/ServiciosFast";
import { ServiciosMoneyBack } from "./components/ServiciosMoneyBack/ServiciosMoneyBack";

export const Beneficios = () => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  console.log("Beneficios component is rendering"); // Debug log
  
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 px-4 py-8 md:py-12">
      <ServiciosFast />
      <ServiciosCustomer />
      <ServiciosMoneyBack />
    </div>
  )
}