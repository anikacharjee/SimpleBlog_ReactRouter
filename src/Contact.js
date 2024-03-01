import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2> <br/>
      <form action="#">
        <table style={{ borderCollapse: 'collapse' }}> 
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}>
                <label htmlFor="name">Name:</label>
              </td>
              <td style={{ padding: '8px' }}>
                <input type="text" id="name" name="name" required />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>
                <label htmlFor="email">Email:</label>
              </td>
              <td style={{ padding: '8px' }}>
                <input type="email" id="email" name="email" required />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>
                <label htmlFor="message">Message:</label>
              </td>
              <td style={{ padding: '8px' }}>
                <textarea id="message" name="message" rows="5" required style={{resize: 'none'}}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
