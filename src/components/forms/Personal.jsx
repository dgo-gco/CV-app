import { useState } from "react";

export const Personal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <h3>Personal Information:</h3>
      <div>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          name="phone"
          id=""
          placeholder="Phone number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
    </div>
  );
};
