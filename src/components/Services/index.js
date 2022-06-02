import React from "react";
import Icon1 from "../../images/Team Frostie.png";
import Icon2 from "../../images/Team Caustie.png";
// import Icon3 from "../../images/Trisian.png";
import Icon4 from "../../images/Team Wildie.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>TEAM</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>@Frostie</ServicesH2>
          <ServicesP>Community Leaders, Snowies Club President</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>@Caustie</ServicesH2>
          <ServicesP>Illustrator, idolizes burnt toast</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>@Wildie</ServicesH2>
          <ServicesP>Tech Lead</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
