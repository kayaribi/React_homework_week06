import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <>
      <h1>此頁面不存在</h1>
      <Link to="/">回首頁</Link>
    </>
  );
}