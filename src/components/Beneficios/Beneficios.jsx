import React from 'react';

import { ServiciosCustomer } from "./components/ServiciosCustomers/ServiciosCustomer";
import { ServiciosFast } from "./components/ServiciosFast/ServiciosFast";
import { ServiciosMoneyBack } from "./components/ServiciosMoneyBack/ServiciosMoneyBack";

export const Beneficios = () => {
  console.log("Beneficios component is rendering"); // Debug log
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 px-4 py-8 md:py-12">
      
      <ServiciosFast />
      <ServiciosCustomer />
      <ServiciosMoneyBack />
    </div>
  )
}





// import React from 'react';
// import { ServiciosCustomer } from "./components/ServiciosCustomers/ServiciosCustomer";
// import { ServiciosFast } from "./components/ServiciosFast/ServiciosFast";
// import { ServiciosMoneyBack } from "./components/ServiciosMoneyBack/ServiciosMoneyBack";

// const Beneficios = () => {
//   return (
//     <div
//       className="inline-flex items-center justify-center gap-[88px] relative"
//       data-model-id="1:64"
//     >
//       <ServiciosFast className="!flex-[0_0_auto]" />
//       <ServiciosCustomer />
//       <ServiciosMoneyBack className="!flex-[0_0_auto]" />
//     </div>
//   )
// }

// export default Beneficios;

// const BeneficiosLinks = () => {
//   return (
//     <div className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          
//           {/* Free Delivery */}
//           <div className="text-center">
//             <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 13a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> */}
//               </svg>
//             </div>
//             <h3 className="font-bold text-gray-900 mb-2">FREE AND FAST DELIVERY</h3>
//             <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
//           </div>

//           {/* Customer Service */}
//           <div className="text-center">
//             <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> */}
//               </svg>
//             </div>
//             <h3 className="font-bold text-gray-900 mb-2">24/7 CUSTOMER SERVICE</h3>
//             <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
//           </div>

//           {/* Money Back Guarantee */}
//           <div className="text-center">
//             <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> */}
//               </svg>
//             </div>
//             <h3 className="font-bold text-gray-900 mb-2">MONEY BACK GUARANTEE</h3>
//             <p className="text-sm text-gray-600">We return money within 30 days</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeneficiosLinks;