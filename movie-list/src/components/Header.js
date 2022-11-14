
import mlogo from "./mylogo.png";
// import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <div className="Left">
          <img src={mlogo} alt='logo' />
          <span> Movie Lists</span>
        </div>
        <div className="right">
          {/* <SearchIcon className="sicon" /> */}
          <input type="text" onChange={props.searchMovie} />
        </div>
      </div>
    </div>
  );
};

export default Header;