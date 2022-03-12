import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {FC} from "react";
import {NavigationButton} from "./Navigation.styles";
import {useHistory} from "../../hooks/useHistory";
import {useAppSelector} from "../../store";

type HistoryButtonProps = {
  type: string;
}

const HistoryButton:FC<HistoryButtonProps> = ({type}) => {
  const prev = useAppSelector(state => state.history.prev.length)
  const next = useAppSelector(state => state.history.next.length)
  const {handlePrevPage, handleNextPage} = useHistory();

  switch (type) {
    case 'prev':
      return (
        <NavigationButton sx={{marginRight: '20px'}} disabled={prev < 2} disableRipple onClick={ handlePrevPage}>
          <ArrowBackIosNewIcon/>
        </NavigationButton>
      )
    case 'next':
      return (
        <NavigationButton sx={{display: {xs:'none', tiny:'inline-flex'}}} disabled={!(!!next)} disableRipple onClick={ handleNextPage}>
          <ArrowForwardIosIcon/>
        </NavigationButton>
      )
    default:
      return null
  }
};

export default HistoryButton