import Header from '../components/header/Header';
import MobileHeadGeral from '../components/header/MobileHeader/MobileHeadGeral';
import useWindowDimensions from './UseWindowDimensions';


const alternateHeader = (dimensions, hide) => {
  if (dimensions >= 1023) {
    return hide && <Header fixed />;
  }

  if (dimensions < 1023) {
    return hide && <MobileHeadGeral fixed />;
  }
};

function PagesHeaderUniversal({ hideHeader }) {
    return (
      <>
          { alternateHeader(useWindowDimensions().width, hideHeader) }
          { useWindowDimensions().width >= 1023 ? <Header /> : <MobileHeadGeral /> }
      </>
    );
  }

export default PagesHeaderUniversal;
