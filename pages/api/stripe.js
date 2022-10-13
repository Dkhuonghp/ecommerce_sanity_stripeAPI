import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      
      const params = {
        submit_type: 'pay',
        // submit_type: 'donate', // hiện giá sản phẩm ở cút thanh toán

        mode: 'payment',
        allow_promotion_codes: true,
        // payment_method_types: ['card'], 

        payment_method_options: {
          customer_balance: {
            funding_type: 'bank_transfer',
            bank_transfer: {
              type: 'jp_bank_transfer',
            },
          },
        },

        billing_address_collection: 'required', // địa chỉ giao hàng
        // lựa chọn phí giao hàng
        shipping_options: [
          { shipping_rate: 'shr_1LpBwMLBhnAcZbQVnI30rr7w' }, 
          { shipping_rate: 'shr_1LpCVDLBhnAcZbQV5kYRyiG5' },
        ],
        phone_number_collection: {
          enabled: true,
        },
        
        line_items: req.body.map((item) => {
          
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/0svza137/production/').replace('-jpg', '.jpg', '-webp', '.webp');
          
          return {
            price_data: { 
              currency: 'jpy',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 1,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
              maximum: 3,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY );

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {

//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         shipping_options: [
//           { shipping_rate: 'shr_1LC5FkLBhnAcZbQV8Le5U7sP' },
//           // { shipping_rate: 'shr_1LCdV9LBhnAcZbQVsn4MTU00' },
//         ],
//         line_items: req.body.cartItems.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img.replace('image-', 'https://cdn.sanity.io/images/0svza137/production/').replace('-webp', '.webp');

//           return {
//             price_data: { 
//               currency: 'usd',
//               product_data: { 
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled:true,
//               minimum: 1,
//             },
//             quantity: item.quantity
//           }
//         }),
//         success_url: `${req.headers.origin}/success=true`,
//         cancel_url: `${req.headers.origin}/canceled=true`,
//       }

//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);

//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }