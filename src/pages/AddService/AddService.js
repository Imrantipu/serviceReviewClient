
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddService = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    };
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added  successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className='mt-9'>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl mt-9">Your Review: {title}</h2>
        <h4 className="text-3xl mt-5">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-9">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-9"
          placeholder="Your Message"
          required
        ></textarea>
        <div className='flex flex-col items-center mt-5'> 
        <input className="btn btn-primary" type="submit" value="Add Review" /> 
        </div>
      </form>
    </div>
  );
};

export default AddService;
