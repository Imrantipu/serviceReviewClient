// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtYQ8mf-5-VN-mL8wUFYKWJIuwdup1kag",
  authDomain: "emigration-hook.firebaseapp.com",
  projectId: "emigration-hook",
  storageBucket: "emigration-hook.appspot.com",
  messagingSenderId: "854511056875",
  appId: "1:854511056875:web:c9cc3618d3c2c1dbaccbae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

handleDelete={handleDelete}
 handleStatusUpdate={handleStatusUpdate}
const handleDelete = id => {
  const proceed = window.confirm('Are you sure, you want to cancel this order');
  if (proceed) {
      fetch(`https://genius-car-server-neon.vercel.app/orders/${id}`, {
          method: 'DELETE',
      })
          .then(res => res.json())
          .then(data => {
              if (data.deletedCount > 0) {
                  alert('deleted successfully');
                  const remaining = reviews.filter(odr => odr._id !== id);
                  setReviews(remaining);
              }
          })
  }
}


const handleStatusUpdate = id => {
  fetch(`https://genius-car-server-neon.vercel.app/orders/${id}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify({ status: 'Approved' })
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              const remaining = reviews.filter(odr => odr._id !== id);
              const approving = reviews.find(odr => odr._id === id);
              approving.status = 'Approved'

              const newOrders = [approving, ...remaining];
              setReviews(newOrders);
          }
      })
}