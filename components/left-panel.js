function LeftPanel({ doctors }) {
  return (
    <div className='left-panel horizontal-flow-content p-0 brd-r'>
      <div className='select-doctor'>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor}>{doctor}</li>
          ))}
        </ul>
      </div>
      <div className='appointment-details horizontal-flow-content'>
        <h2 className='a-center'>Appointment Details</h2>
        <button type='button'>Load demo data for equipment integration</button>
        <form className='appointment-details-form'>
          <div className='form-inputs horizontal-flow-content'>
            <div>
              <label></label>
              <input type='text' defaultValue={"Montreal"} />
            </div>
            <div>
              <label></label>
              <input type='text' defaultValue={"Dr. Ivan"} />
            </div>
            <div>
              <label>From</label>
              <input
                type='text'
                className='a-center'
                defaultValue={"01/04/2023"}
              />
            </div>
            <div>
              <label>To</label>
              <input
                type='text'
                className='a-center'
                defaultValue={"07/04/2023"}
              />
            </div>
            <div>
              <label></label>
              <select>
                <option>Self paid</option>
                <option>Insurance</option>
              </select>
            </div>
            <div>
              <label></label>
              <input type='text' />
            </div>
            <div className='horizontal-flow-content'>
              <label>Comments</label>
              <textarea rows={15} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeftPanel;
