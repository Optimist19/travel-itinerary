import PlanATrip from "@/components/PlanATrip/PlanATrip";
import SideBar from "@/components/PlanATrip/SideBar";
import React from "react";

function PlanATripPage() {
  return (
    <div className="bg-[#F0F2F5] flex gap-3 p-3.5 pt-[12vh]">
      <SideBar />
      <PlanATrip />
    </div>
  );
}

export default PlanATripPage;
