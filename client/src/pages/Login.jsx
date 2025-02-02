import { Link } from "react-router";
import loginBackground from "../assets/images/loginBackground.png";
import crown from "../assets/images/crown.png";

function Login() {
  return (
    <div className="flex justify-center items-center">
      <img src={loginBackground} className="w-full h-screen" />
      <div className="absolute flex flex-col items-center w-[646.78px] h-auto rounded-[15px] bg-white/90">
        <img src={crown} className="w-[287.54px] h-[114.41px] mt-[17.54px]" />
        <p className="mt-[17.54px] text-black text-[45.76px] font-bold">
          KING OF ECONOMY
        </p>
        <Link to="/dashboard">
          <button className="flex justify-center items-center w-[433.22px] h-[78.56px] gap-[28.22px] px-[28.98px] py-[6.1px] mt-[54.07px] mb-[69.53px] rounded-[38.14px] bg-[#235789] cursor-pointer">
            <svg
              width={34}
              height={32}
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M15.466 7.2966L13.1168 9.66948L17.4795 14.0763H0.364258V17.4661H17.4795L13.1168 21.8729L15.466 24.2458L23.8558 15.7712L15.466 7.2966ZM30.5676 27.6356H17.1439V31.0254H30.5676C32.4134 31.0254 33.9236 29.5 33.9236 27.6356V3.90677C33.9236 2.04236 32.4134 0.516937 30.5676 0.516937H17.1439V3.90677H30.5676V27.6356Z"
                fill="white"
              />
            </svg>
            <p className="text-white text-[36.61px] font-bold">Login</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
