import "../index.css";

function ButtonLoader({ loading, children , styles , ...props}) {
  return (
    <button className={`btn ${styles}`} disabled={loading} {...props}>
      {loading ? <span className="spinner" /> : children}
    </button>
  );
}

export default ButtonLoader;