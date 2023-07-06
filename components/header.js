function Header(params) {
  return (
    <header className='brd-r'>
      <div className='select-doctor vertical-flow-content'>
        <button type='button'>Single doctor</button>
        <button type='button'>Multiple doctor</button>
      </div>
      <div className='date-navigation vertical-flow-content'>
        <div className='date-navigation-buttons vertical-flow-content'>
          <button type='button'>← Previous</button>
          <button type='button'>Today</button>
          <button type='button'>Daily</button>
          <button type='button'>Weekly</button>
          <button type='button'>Next →</button>
        </div>
        <div className='date-navigation-calendar'>
          <input type='date' />
        </div>
      </div>
      <div>Last updated 07/04/2023</div>
    </header>
  );
}

export default Header;
