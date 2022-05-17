import React from "react";
import picture1 from "../assets/images/member.jpeg"; //HERE YOU ARE REFERENCING THE TEAM PICTURE CARDS
import picture2 from "../assets/images/member2.jpeg";
import TeamCard from "./Team-Card.js"


export default function Team() {
    return(
        <section>
            <h1>Team</h1>
            <div className="team-page">
                <TeamCard 
                    img={picture1}
                    name = "John Doe"
                    title = "CEO"
                    about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque vestibulum nibh, sit amet ornare elit imperdiet nec. Fusce porttitor dictum laoreet. Mauris rutrum congue libero. Morbi sit amet tempus sem, eget tempor turpis. Quisque efficitur viverra justo, eget maximus urna venenatis at. Aenean nec ligula ex. Pellentesque lectus diam, maximus semper hendrerit ut, sagittis sit amet urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas luctus faucibus rhoncus. Fusce diam eros, dapibus id mollis vulputate, pulvinar sed turpis. Etiam purus erat, facilisis posuere cursus sit amet, finibus nec felis. Suspendisse eu nibh at ipsum venenatis volutpat sit amet in dolor. Sed id enim congue, pretium tortor in, finibus ante. Sed sollicitudin est quis arcu imperdiet scelerisque porttitor nec ante."
                    email = "mailto:uca@uca.com"
                    twitter = "@uca"
                    scholar = "@scholar"
                    instagram = "@instagram"
                    linkedin = "www.linkedin.com/"
                /> 
                {/* AND USING IT HERE ^^^  */}
                <TeamCard 
                    img={picture2}
                    name = "Jane Doe"
                    title = "CFO"
                    about = "Nunc accumsan fermentum arcu, at feugiat eros dictum at. Praesent sed dolor a dolor consequat pretium ac convallis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sed diam sed nulla pellentesque pellentesque vitae vel tortor. Nunc lobortis, ex quis tincidunt faucibus, sapien nibh lobortis massa, nec hendrerit elit nisi ac diam. Nam tincidunt urna ut dui dapibus sollicitudin. "
                    email = "uca@uca.com"
                    twitter = "@uca"
                    instagram = "@instagram"
                    linkedin = "www.linkedin.com/"
                /> 

                <TeamCard 
                    img={picture1}
                    name = "Jamiroquai Doe"
                    title = "Frontend Developer"
                    about = "Nunc accumsan fermentum arcu, at feugiat eros dictum at. Praesent sed dolor a dolor consequat pretium ac convallis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sed diam sed nulla pellentesque pellentesque vitae vel tortor. Nunc lobortis, ex quis tincidunt faucibus, sapien nibh lobortis massa, nec hendrerit elit nisi ac diam. Nam tincidunt urna ut dui dapibus sollicitudin. "
                    email = "uca@uca.com"
                    twitter = "@uca"
                    scholar = "@scholar"
                    instagram = "@instagram"
                    linkedin = "www.linkedin.com/"
                /> 

                <TeamCard 
                    img={picture2}
                    name = "Club Mate"
                    title = "CTO & Reseracher"
                    about = "Nunc accumsan fermentum arcu, at feugiat eros dictum at. Praesent sed dolor a dolor consequat pretium ac convallis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sed diam sed nulla pellentesque pellentesque vitae vel tortor. Nunc lobortis, ex quis tincidunt faucibus, sapien nibh lobortis massa, nec hendrerit elit nisi ac diam. Nam tincidunt urna ut dui dapibus sollicitudin. "
                    email = "uca@uca.com"
                    twitter = "@uca"
                    scholar = "@scholar"
                    instagram = "@instagram"
                    linkedin = "www.linkedin.com/"
                /> 

                <TeamCard 
                    img={picture1}
                    name = "Club Mate"
                    title = "CTO & Reseracher"
                    about = "Nunc accumsan fermentum arcu, at feugiat eros dictum at. Praesent sed dolor a dolor consequat pretium ac convallis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sed diam sed nulla pellentesque pellentesque vitae vel tortor. Nunc lobortis, ex quis tincidunt faucibus, sapien nibh lobortis massa, nec hendrerit elit nisi ac diam. Nam tincidunt urna ut dui dapibus sollicitudin. "
                    email = "uca@uca.com"
                    twitter = "@uca"
                    scholar = "@scholar"
                    instagram = "@instagram"
                    linkedin = "www.linkedin.com/"
                /> 
            </div>
        </section>
    )
}

