import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <table>
        <thead>
          <tr>
            {/* <th>Field</th>
            <th>Value</th> */}
            <th colSpan={2}>Company Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company Name</td>
            <td>TechGuru</td>
          </tr>
          <tr>
            <td>Founded</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>New Delhi</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default About;
