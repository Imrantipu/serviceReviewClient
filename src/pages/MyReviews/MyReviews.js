import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewsRow from './MyReviewsRow';


const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    

    

    return (
        <div>
            <h2 className="text-5xl flex flex-col items-center mt-5">You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full mt-9 ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(order => <MyReviewsRow
                                key={order._id}
                                order={order}
                            
                            ></MyReviewsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;