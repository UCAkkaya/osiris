import React from "react";
import emailIcon from "../assets/icons/email_b.png"
import twitterIcon from "../assets/icons/tw_b.png"
import lininkedIcon from "../assets/icons/lin_b.png"
import scholarIcon from "../assets/icons/sch_b.png"

export default function TeamCard(props) {
    return(
        <div>
            <div className="team-card">
                <img className="img" src={props.img}></img>
                <div className="info">
                    <h3 className="name" > {props.name}</h3>
                    <h3 className="title" > {props.title}</h3>
                    <p className="about"> {props.about} </p>
                    <div className="team-card-footer">
                        <span className="icon-tray"> 
                            {props.email ? <a href={props.email}><img className="icons" src={emailIcon}/></a> : null}
                            {props.twitter ? <a href={props.twitter}><img className="icons" src={twitterIcon}/></a> : null}
                            {props.linkedin ? <a href={props.linkedin}><img className="icons" src={lininkedIcon}/></a> : null}
                            {props.scholar ? <a href={props.scholar}><img className="icons" src={scholarIcon}/></a> : null}
                        </span> 
                    </div>
                </div>

            </div>
        </div>
    )
}

