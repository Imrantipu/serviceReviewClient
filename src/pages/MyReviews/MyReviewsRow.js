

const MyReviewsRow = ({ review, handleDelete,}) => {
    const { _id, serviceName,price,message, } = review;
    

    

    return (
        <tr>
            <th>{serviceName}</th>
            <th>${price}</th>
            <th>{message}</th>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Delete</button>
                </label>
            </th>
        </tr>
    );
};

export default MyReviewsRow;