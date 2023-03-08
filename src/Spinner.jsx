export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",backgroundColor:"#e99595"}}>
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
  );
};
