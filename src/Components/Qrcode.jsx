import React from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Qrcode = () => {
  const [scannerresult, setScannerREsult] = useState();
  const Scanner = new Html5QrcodeScanner("reader", {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 5,
  });
  Scanner.render(success, error);
  function success(result) {
    Scanner.clear();
    setScannerResult(result);
  }
  return (
    <div>
      <h1>QR code scanning in React</h1>
    </div>
  );
};

export default Qrcode;
