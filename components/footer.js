function Footer(params) {
  return (
    <footer className='brd-r'>
      <div className='controller vertical-flow-content'>
        <label>Font size:</label>
        <button>+</button>
        <button>-</button>
        <label>Scale:</label>
        <select>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>
      </div>
      <div className='output vertical-flow-content'>
        <button type='button'>Print</button>
        <button type='button'>Validate</button>
      </div>
      <div className='manage'>
        <button type='button'>Manage</button>
      </div>
    </footer>
  );
}

export default Footer;
