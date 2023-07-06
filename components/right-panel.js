import { returnDateArray, returnTimeArray } from "@/utils/helper-functions";

function RightPanel(params) {
  const endDate = new Date();

  const returnedDateArray = returnDateArray({
    startDate: new Date(),
    endDate: new Date().setDate(endDate.getDate() + 6),
    step: 1,
  });

  const formattedDate = returnedDateArray.map((date) =>
    date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      weekday: "short",
    })
  );

  const returnedArrayTime = returnTimeArray({
    startTime: new Date().setHours(9, 0, 0),
    endTime: new Date().setHours(17, 0, 0),
    step: 30,
  });

  function bookOnClickHandler(date, time, doctor) {
    console.log({ date, time, doctor });
  }

  return (
    <div className='right-panel brd-r'>
      <div className='calendar-container'>
        <div className='calendar-book-times'>
          {returnedArrayTime.map((time) => (
            <div key={time} className=''>
              {time}
            </div>
          ))}
        </div>
        {formattedDate.map((date) => (
          <div key={date} className='calendar-date horizontal-flow-content'>
            <div className='calendar-date-title a-center'>{date}</div>
            <div className='calendar-date-doctor a-center'>First Dr.</div>
            <div className='calendar-times-wrapper'>
              {returnedArrayTime.map((time) => (
                <div
                  key={time}
                  className='calendar-book'
                  onClick={() => bookOnClickHandler(date, time, "First Dr.")}
                >
                  <div className='calendar-book-state'>Available</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightPanel;
