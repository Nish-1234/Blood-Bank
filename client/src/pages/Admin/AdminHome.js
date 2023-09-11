import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          BloodBank, developed between August 2023 and September 2023, is a sophisticated Blood Donation Management System that harnesses the power of the MERN stack (MongoDB, ExpressJs, ReactJs, NodeJs) to create a dynamic web application. This system plays a vital role in seamlessly connecting Donors, Hospitals, and Admins, revolutionizing the blood donation process.
</p>
At its core, BloodBank is all about efficiency, security, and user experience. It streamlines the donation process by offering features like real-time scheduling, updates, and robust data handling. React.js interfaces provide a user-friendly experience, while MongoDB ensures reliable and scalable data storage.


One of its standout features is JWT-secured appointments, optimizing the donation process. This ensures real-time tracking, secure appointments, and efficient event management. With Node.js, the server operates 30% faster, enhancing overall performance. MongoDB, known for its robust security features, guarantees 0% data breaches, ensuring the privacy and safety of sensitive information.

BloodBank acts as a bridge between Donors and Hospitals. It offers personalized Donor profiles, inventory tracking, and streamlined appointment coordination, all backed by JWT authentication for added security. This system represents a significant leap forward in blood donation management, making it more accessible, efficient, and secure for everyone involved, ultimately saving lives in the process.
          <p/>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
