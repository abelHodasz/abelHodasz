import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import NemorphicButton from "../../components/NeumorphicButton/NemorphicButton";
export default function Home() {
    const history = useHistory();
    return (
        <Fragment>
            <h1 className="title">Home</h1>
            <div id="home">
                <div className="home-header">
                    <h3 className="home-h3">
                        I design great UX and UI with a mobile first approach
                    </h3>
                </div>
                <div className="home-projects">
                    <NemorphicButton
                        onClick={() => {
                            history.push("/about-me");
                        }}
                    >
                        More About Me
                    </NemorphicButton>
                </div>
            </div>
            <div style={{ width: "60%", margin: "0 auto" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                pulvinar neque laoreet suspendisse interdum consectetur libero
                id. Felis bibendum ut tristique et egestas quis. Auctor neque
                vitae tempus quam pellentesque nec. Ultrices sagittis orci a
                scelerisque purus. In tellus integer feugiat scelerisque varius
                morbi enim. Faucibus in ornare quam viverra. Volutpat commodo
                sed egestas egestas fringilla phasellus faucibus. Non quam lacus
                suspendisse faucibus interdum posuere lorem. Pellentesque eu
                tincidunt tortor aliquam nulla. Dolor magna eget est lorem ipsum
                dolor sit amet consectetur. Volutpat sed cras ornare arcu dui
                vivamus arcu felis bibendum. Sapien nec sagittis aliquam
                malesuada bibendum arcu. Dolor magna eget est lorem. Lacinia
                quis vel eros donec ac odio tempor orci dapibus. Neque aliquam
                vestibulum morbi blandit. Pulvinar mattis nunc sed blandit
                libero volutpat sed cras ornare. Enim ut tellus elementum
                sagittis vitae et. Convallis convallis tellus id interdum velit
                laoreet. Mauris commodo quis imperdiet massa tincidunt nunc
                pulvinar sapien. Elit scelerisque mauris pellentesque pulvinar
                pellentesque habitant morbi. Enim nunc faucibus a pellentesque
                sit. Consectetur lorem donec massa sapien faucibus et molestie
                ac. Volutpat diam ut venenatis tellus in metus vulputate eu.
                Nisl rhoncus mattis rhoncus urna neque viverra justo nec
                ultrices. Ultricies integer quis auctor elit sed vulputate mi
                sit amet. At in tellus integer feugiat. Enim facilisis gravida
                neque convallis a. Diam donec adipiscing tristique risus nec
                feugiat in fermentum. In nibh mauris cursus mattis. Porttitor
                eget dolor morbi non arcu. Magnis dis parturient montes nascetur
                ridiculus mus. Facilisi cras fermentum odio eu feugiat pretium.
                Et netus et malesuada fames ac turpis egestas sed. Lorem ipsum
                dolor sit amet consectetur adipiscing elit duis. Morbi non arcu
                risus quis varius. Ipsum suspendisse ultrices gravida dictum
                fusce ut placerat orci nulla. Neque aliquam vestibulum morbi
                blandit cursus risus. Dignissim enim sit amet venenatis urna
                cursus eget nunc scelerisque. Id interdum velit laoreet id donec
                ultrices tincidunt arcu non. Tortor aliquam nulla facilisi cras
                fermentum odio eu feugiat. Est ullamcorper eget nulla facilisi.
                Bibendum arcu vitae elementum curabitur vitae. Quisque non
                tellus orci ac auctor augue mauris augue. Quis vel eros donec ac
                odio tempor orci. Placerat vestibulum lectus mauris ultrices
                eros in cursus turpis massa. Et netus et malesuada fames ac
                turpis. Ante in nibh mauris cursus mattis molestie a iaculis at.
                Sem fringilla ut morbi tincidunt augue interdum velit euismod.
                Malesuada fames ac turpis egestas maecenas pharetra convallis.
                Et egestas quis ipsum suspendisse ultrices gravida dictum. Massa
                eget egestas purus viverra accumsan in. Ac auctor augue mauris
                augue neque gravida in. Lorem dolor sed viverra ipsum nunc.
                Commodo viverra maecenas accumsan lacus vel facilisis volutpat.
                Viverra adipiscing at in tellus integer feugiat scelerisque.
                Interdum velit euismod in pellentesque massa. Purus in mollis
                nunc sed. Leo duis ut diam quam nulla porttitor massa. Fermentum
                posuere urna nec tincidunt praesent semper feugiat nibh. Sed
                tempus urna et pharetra pharetra massa massa ultricies. Blandit
                libero volutpat sed cras ornare. Et tortor consequat id porta
                nibh venenatis cras sed. Vitae tempus quam pellentesque nec nam
                aliquam. Fames ac turpis egestas maecenas pharetra. Magna sit
                amet purus gravida quis. Leo urna molestie at elementum eu
                facilisis sed odio. Dictum at tempor commodo ullamcorper a
                lacus. Et ultrices neque ornare aenean euismod elementum nisi.
                Odio eu feugiat pretium nibh ipsum consequat. Potenti nullam ac
                tortor vitae. Sit amet dictum sit amet justo donec enim diam
                vulputate. Integer malesuada nunc vel risus commodo viverra.
                Amet consectetur adipiscing elit ut aliquam purus sit. Lacus
                luctus accumsan tortor posuere ac ut. Vel orci porta non
                pulvinar neque laoreet suspendisse interdum consectetur. Turpis
                in eu mi bibendum neque egestas congue quisque. Nullam vehicula
                ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper
                sit amet risus nullam eget. Eu non diam phasellus vestibulum
                lorem sed. Bibendum neque egestas congue quisque egestas diam in
                arcu. Id diam maecenas ultricies mi eget mauris. Nulla facilisi
                morbi tempus iaculis urna. Congue eu consequat ac felis. A erat
                nam at lectus urna duis. Erat velit scelerisque in dictum non
                consectetur a erat. Phasellus egestas tellus rutrum tellus. Urna
                neque viverra justo nec ultrices dui sapien eget. Amet
                consectetur adipiscing elit pellentesque habitant morbi
                tristique senectus. Mauris cursus mattis molestie a iaculis at.
                Mattis nunc sed blandit libero volutpat sed cras ornare. Nunc
                sed augue lacus viverra vitae congue. Pretium lectus quam id leo
                in vitae turpis massa sed. Eros donec ac odio tempor. Quis enim
                lobortis scelerisque fermentum dui faucibus in. Leo vel orci
                porta non pulvinar. Eget nullam non nisi est sit amet. Id eu
                nisl nunc mi. At erat pellentesque adipiscing commodo elit at.
                Felis bibendum ut tristique et egestas quis ipsum. Tellus
                pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
                Sagittis orci a scelerisque purus. Lectus sit amet est placerat
                in egestas erat imperdiet. Diam sit amet nisl suscipit
                adipiscing bibendum est ultricies integer. Libero id faucibus
                nisl tincidunt eget nullam. Duis ultricies lacus sed turpis.
                Rhoncus aenean vel elit scelerisque mauris pellentesque. Quis
                imperdiet massa tincidunt nunc. Risus feugiat in ante metus
                dictum at. Sociis natoque penatibus et magnis dis parturient.
                Dignissim diam quis enim lobortis scelerisque fermentum dui
                faucibus. Ipsum dolor sit amet consectetur adipiscing elit
                pellentesque habitant morbi. Elit sed vulputate mi sit amet
                mauris commodo. Tincidunt lobortis feugiat vivamus at augue. Id
                faucibus nisl tincidunt eget nullam non nisi est sit. Facilisis
                sed odio morbi quis commodo odio aenean sed. Risus at ultrices
                mi tempus imperdiet. Vitae proin sagittis nisl rhoncus mattis
                rhoncus urna neque viverra. Lorem mollis aliquam ut porttitor
                leo a diam sollicitudin tempor. Risus commodo viverra maecenas
                accumsan lacus vel. Mauris sit amet massa vitae tortor
                condimentum lacinia quis vel. Pretium lectus quam id leo. Odio
                eu feugiat pretium nibh ipsum consequat nisl vel pretium. Elit
                duis tristique sollicitudin nibh sit amet commodo. Scelerisque
                viverra mauris in aliquam sem. Nibh mauris cursus mattis
                molestie a iaculis at erat pellentesque. Quisque sagittis purus
                sit amet volutpat consequat mauris nunc. Turpis tincidunt id
                aliquet risus feugiat in ante metus. Sed enim ut sem viverra
                aliquet eget sit amet tellus. Eget velit aliquet sagittis id
                consectetur purus ut faucibus. Felis donec et odio pellentesque.
                Sed turpis tincidunt id aliquet risus. Bibendum ut tristique et
                egestas quis. Id semper risus in hendrerit gravida rutrum
                quisque non. Lobortis scelerisque fermentum dui faucibus in
                ornare. Auctor neque vitae tempus quam pellentesque nec.
            </div>
        </Fragment>
    );
}
