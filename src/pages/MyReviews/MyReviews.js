import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://y-two-red.vercel.app/review?email=${user?.email}`)
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://y-two-red.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl flex flex-col items-center mt-5">
        You have {reviews.length} Reviews
      </h2>
      <div className="overflow-x-auto w-full mt-9 ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <MyReviewsRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></MyReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
