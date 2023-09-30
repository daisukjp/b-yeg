import Link from "next/link";
import Header from "./header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "10rem", height: "20rem" }}>
        <h1 style={{ fontSize: "32px" }}>Page Not Found</h1>
        <div className="face">🥹😭</div>
        <div>
          <Link href="/" className="error__page-button">
            back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
