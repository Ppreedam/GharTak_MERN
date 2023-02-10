// import React, { useState } from 'react';

// const ReferralSystem = () => {
//   const [referralCode, setReferralCode] = useState('');
//   const [referralLevel, setReferralLevel] = useState(0);
//   const [rewards, setRewards] = useState({
//     1: '$5',
//     2: '$10',
//     3: '$20',
//     4: '$50',
//     5: '$100'
//   });

//   const generateReferralCode = () => {
//     // generate a unique referral code
//     const code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//     setReferralCode(code);
//   };

//   const trackReferral = () => {
//     // increment referral level
//     setReferralLevel(prevLevel => prevLevel + 1);
//   };

//   const claimReward = () => {
//     // send rewards based on referral level
//     const reward = rewards[referralLevel];
//     console.log(`Congratulations, you've earned a reward of ${reward}!`);
//   };

//   return (
//     <div>
//       <button onClick={generateReferralCode}>Generate Referral Code</button>
//       <br />
//       <p>Your referral code is: {referralCode}</p>
//       <br />
//       <button onClick={trackReferral}>Track Referral</button>
//       <br />
//       <p>Your referral level is: {referralLevel}</p>
//       <br />
//       {referralLevel === 5 ? <button onClick={claimReward}>Claim Reward</button> : ''}
//     </div>
//   );
// };

// export default ReferralSystem;


// 



// import React, { useState } from 'react';
// import axios from 'axios';

// const ReferralSystem = () => {
//   const [user1, setUser1] = useState({});
//   const [user2, setUser2] = useState({ referredUsers: [] });

//   const handleUser1Registration = async (e, referralCode) => {
//     e.preventDefault();
//     try {
//       // check if referralCode is valid
//       const res = await axios.get(`/api/users/${referralCode}`);
//       const referralUser = res.data;
//       if (!referralUser) {
//         console.log("Invalid referral code.");
//         return;
//       }
//       // register user1
//       const newUser = { name: e.target.name.value, referralCode };
//       setUser1(newUser);
//       // add user1 to user2's dashboard
//       setUser2({...user2, referredUsers: [...user2.referredUsers, newUser]});
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const generateReferralCode = async () => {
//     try {
//         // generate a unique referral code for user2
//       const res = await axios.post('/api/users', {});
//       const referralCode = res.data.referralCode;
//       setUser2({...user2, referralCode});
//     } catch (error) {
        
//     }
//   }
// }