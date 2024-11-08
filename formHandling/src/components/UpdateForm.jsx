import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const UpdateForm = ({ users, updateUserIdex, handleUpdateForm }) => {
  const { register, handleSubmit, reset } = useForm();

  // Directly initialize state from the selected user without useEffect
  const updateCurrenTFieds = users[updateUserIdex];
  const { name, email, image } = updateCurrenTFieds;

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [uimage, setImage] = useState(image);

  // Handle form submission even this way can be used
//   const onSubmit = () => {
//     handleUpdateForm({ uname, uemail, uimage });
//     reset(); // Reset the form after submitting
//   };
//instaed you can send data directly

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit((data)=>{ handleUpdateForm(data);
        reset();})}
      >
        <input
          className="outline-dotted outline-yellow-200"
          value={uname}
          {...register('uname')}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <input
          className="outline-dotted outline-yellow-200"
          value={uemail}
          {...register('uemail')}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <input
          className="outline-dotted outline-yellow-200"
          value={uimage}
          {...register('uimage')}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter imageUrl"
        />
        <button type="submit">Submit Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
