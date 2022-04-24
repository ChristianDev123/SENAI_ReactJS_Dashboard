import React, { useState } from "react";
import WidgetInfo from "../info/infowidget";
import { useEffect } from "react";
import axios from 'axios';


export default function Homepage(){

    return(
        <div className="container">
            <div className="row">
                <WidgetInfo coins="teste" />
            </div>
        </div>
    );
}