import HeaderWrapper from "../Header/HeaderWrapper";
import WidgetInfo from "../info/infowidget";
import MainWrapper from '../Main/mainWrapper';
import { Grid } from "./stylesLayout";

export default function Layout(){
    return(
        <Grid>
            <HeaderWrapper/>
            <MainWrapper/>
            {/* <WidgetInfo /> */}
        </Grid>
    )
}