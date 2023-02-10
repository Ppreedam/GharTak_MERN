// import React, { useState } from 'react';
// import { Document, Page, Text, View, StyleSheet } from 'react-pdf';
// import FileDownload from 'js-file-download';
// import jsPDF from 'jspdf';


// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// const CheckoutPage = () => {
//   const [items, setItems] = useState([
//     { name: 'Item 1', price: 10 },
//     { name: 'Item 2', price: 20 },
//     { name: 'Item 3', price: 30 }
//   ]);
//   const [total, setTotal] = useState(0);

//   const handleCheckout = () => {
//     let sum = 0;
//     items.forEach(item => {
//       sum += item.price;
//     });
//     setTotal(sum);
//   };

//   const handleDownload = () => {
//     const pdf = new jsPDF();
//     pdf.text('Checkout Page', 10, 10);
//     pdf.autoTable({
//       startY: 20,
//       head: [['Item Name', 'Price']],
//       body: items.map(item => [item.name, item.price])
//     });
//     pdf.text(`Total: ${total}`, 10, pdf.autoTable.previous.finalY + 20);
//     FileDownload(pdf.output(), 'bill.pdf');
//   };

//   return (
//     <div>
//       <Document>
//         <Page size="A4" >
//           <View style={styles.section}>
//             {/* <Text>Checkout Page</Text> */}
//             <table>
//               <thead>
//                 <tr>
//                   <th>Item Name</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map(item => (
//                   <tr key={item.name}>
//                     <td>{item.name}</td>
//                     <td>{item.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <h1>Total: {total}</h1>
//           </View>
//         </Page>
//       </Document>
//       <button onClick={handleDownload}>Download PDF</button>
//     </div>
//   );
// };

// export default CheckoutPage;
