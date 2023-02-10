import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import campaignB from "../../../icons/Affiliate/campaign_b.png";
import campaignW from "../../../icons/Affiliate/campaign_w.png";
import dashboardBlack from "../../../icons/Affiliate/dashboard_black.png";
import dashboardWhite from "../../../icons/Affiliate/dashboard_white.png";
import leadsB from "../../../icons/Affiliate/leads_b.png";
import leadsW from "../../../icons/Affiliate/leads_w.png";
import payoutB from "../../../icons/Affiliate/payout_b.png";
import payoutW from "../../../icons/Affiliate/payout_w.png";
import promoterB from "../../../icons/Affiliate/promoter_b.png";
import promoterW from "../../../icons/Affiliate/promoter_w.png";
import promotionsB from "../../../icons/Affiliate/promotion_b.png";
import promotionsW from "../../../icons/Affiliate/promotion_w.png";
import rewardsB from "../../../icons/Affiliate/reward_b.png";
import rewardsW from "../../../icons/Affiliate/reward_w.png";
import Header from "../../Shared/Header";
import NavigateButton from "../../Shared/NavigateButton";
import SidebarMenu from "../../Shared/SidebarMenu";

const AffiliateManager = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const affiliateLinks = [
    {
      id: 1,
      name: "Dashboard",
      to: "dashboard",
      iconWhite: dashboardWhite,
      iconBlack: dashboardBlack,
    },
    {
      id: 2,
      name: "Campaigns",
      to: "campaigns",
      iconWhite: campaignW,
      iconBlack: campaignB,
    },
    {
      id: 3,
      name: "Promoters",
      to: "promoters",
      iconWhite: promoterW,
      iconBlack: promoterB,
    },
    {
      id: 4,
      name: "Promotions",
      to: "promotions",
      iconWhite: promotionsW,
      iconBlack: promotionsB,
    },
    {
      id: 5,
      name: "Leads",
      to: "leads",
      iconWhite: leadsW,
      iconBlack: leadsB,
    },
    {
      id: 6,
      name: "Rewards / Commissions",
      to: "rewards",
      iconWhite: rewardsW,
      iconBlack: rewardsB,
    },
    {
      id: 7,
      name: "Payouts",
      to: "payouts",
      iconWhite: payoutW,
      iconBlack: payoutB,
    },
  ];
  const notifications = [
    {
      id: 1,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
    {
      id: 2,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
    {
      id: 3,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
    {
      id: 4,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
  ];
  const menuButton = (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="p-5 md:hidden"
    >
      {menuIcon}
    </button>
  );
  const location = useLocation();
  console.log("ok",location);
  return (
    <div className="h-screen bg-gray-200 ">
      <div className="flex relative">
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuLinks={affiliateLinks}
          title={"Affiliate Manager"}
        />
        <div className="w-full justify-end bg-gray-200">
          <Header notifications={notifications} menuButton={menuButton} />

          <div className="md:ml-0 ml-0 md:p-10 p-5 min-h-screen">
            <div className="relative">
              {location.pathname === "/affiliate-manager/dashboard" && (
                <>
                  <NavigateButton left={true} to="/affiliate/dashboard" />
                  <NavigateButton to="/merchant-processor/forms" />
                </>
              )}
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateManager;

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);
