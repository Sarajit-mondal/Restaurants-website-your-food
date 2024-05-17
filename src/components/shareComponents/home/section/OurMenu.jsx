import Title from "../../../title/Title";

import menuIcon from "../../../../assets/icon/Rectangle 11.png";

function OurMenu() {
  return (
    <div className="my-10">
      <Title heading={"FORM OUR MENU"} subheading={"Check it Out"}></Title>
      {/* our menu */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        {/* left side menu */}
        <div className="space-y-8">
          {/* menu one */}
          <div className="flex items-center gap-6 text-light-gray">
            <img src={menuIcon} alt="" />
            <div>
              <h3>ROAST DUCK BERAST............</h3>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <span className="text-gold-500">$14.5</span>
          </div>
          {/* menu one */}
          {/* menu two */}
          <div className="flex items-center gap-6 text-light-gray">
            <img src={menuIcon} alt="" />
            <div>
              <h3>ROAST DUCK BERAST............</h3>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <span className="text-gold-500">$14.5</span>
          </div>
          {/* menu two */}
          {/* menu there */}
          <div className="flex items-center gap-6 text-light-gray">
            <img src={menuIcon} alt="" />
            <div>
              <h3>ROAST DUCK BERAST............</h3>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <span className="text-gold-500">$14.5</span>
          </div>
          {/* menu there */}
        </div>
        {/* right side menu */}
        <div className="space-y-8">
          {/* menu one */}
          <div className="flex items-center gap-6 text-light-gray">
            <img src={menuIcon} alt="" />
            <div>
              <h3>ROAST DUCK BERAST............</h3>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <span className="text-gold-500">$14.5</span>
          </div>
          {/* menu one */}
          {/* menu two */}
          <div className="flex items-center gap-6 text-light-gray">
            <img src={menuIcon} alt="" />
            <div>
              <h3>ROAST DUCK BERAST............</h3>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <span className="text-gold-500">$14.5</span>
          </div>
          {/* menu two */}
          {/* menu there */}
          <div className="flex items-center gap-6 text-light-gray">
            <img src={menuIcon} alt="" />
            <div>
              <h3>ROAST DUCK BERAST............</h3>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <span className="text-gold-500">$14.5</span>
          </div>
          {/* menu there */}
        </div>
      </div>
      <button className="btn border-b-4 border-b-neutral-500 block mx-auto mt-10">
        VIEW FULL Menu
      </button>
    </div>
  );
}

export default OurMenu;
