import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";

function Main(params) {
  const doctors = ["First Dr.", "Second Dr.", "Third Dr.", "Fourth Dr."];

  return (
    <section className='container brd-r'>
      <LeftPanel doctors={doctors} />
      <RightPanel />
    </section>
  );
}

export default Main;
