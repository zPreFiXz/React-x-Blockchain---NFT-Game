import { Link } from "react-router";
import './Factory.css';
import Electic from "../assets/Electic.jpg";
import gold from "../assets/gold.jpg";
import oil from "../assets/oil.jpg";
import rock from "../assets/rock.jpg";
import woods from "../assets/woods.jpg";
import NPC from "../assets/NPC.png";

const Factory = () => {
  return (
    <>
      <div id="factory" className="w-full h-screen">
        <div className="flex justify-center items-center pt-12">
          <div id="factory-card" className="flex flex-col">
            <div id="factory-content" className="ml-16 mr-52">

              {/* Header section */}
              <section id="factory-header" className="mt-7">
                <h2 className="text-2xl font-bold">Factory Sale Broker</h2>
                <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </section>

              {/* Body section */} 
              <section id="factory-links" className="flex flex-row items-center mt-15 gap-3 ml-10">
                <Link to="/dashboard?key=1"><img className="factory-img" src={woods} alt="woods" /></Link>
                <Link to="/dashboard?key=2"><img className="factory-img" src={rock} alt="rock" /></Link>
                <Link to="/dashboard?key=3"><img className="factory-img" src={oil} alt="oil" /></Link>
                <Link to="/dashboard?key=4"><img className="factory-img" src={gold} alt="gold" /></Link>
                <Link to="/dashboard?key=5"><img className="factory-img" src={Electic} alt="Electic" /></Link>
              </section>

              {/* footer section */}
              <section id="factory-npc">
                <img src={NPC} alt="sell broker"/>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Factory