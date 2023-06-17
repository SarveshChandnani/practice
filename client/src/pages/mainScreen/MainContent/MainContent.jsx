import React from 'react'
import "./mainContent.css"
const MainContent = () => {
  return (
    <div className='mainContent'>
    <div className="card">
    <div className='cardTable'>
    <table>
      <tbody>
        <tr>
          <td>Row 1, Column 1</td>
          <td>Row 1, Column 2</td>
          <td>Row 1, Column 3</td>
        </tr>
        <tr>
          <td>Row 2, Column 1</td>
          <td>Row 2, Column 2</td>
          <td>Row 2, Column 3</td>
        </tr>
        <tr>
          <td>Row 3, Column 1</td>
          <td>Row 3, Column 2</td>
          <td>Row 3, Column 3</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  </div>
  )
}

export default MainContent