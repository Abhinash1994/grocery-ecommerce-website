import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Faq extends Component {
    render() {
        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h3>Faqs</h3>
                        <h4><Link href="/">Home</Link><label>/</label>Faqs</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/* faqs */}
                <div className="faq-w3 main-grid-border">
                    <div className="container">
                        <div className="spec ">
                            <h3>Faqs</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className="panel-group" id="accordion">
                            {/* First Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseOne">
                                        <span>1.</span> It is a long established fact that a reader will be distracted ?
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. .</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Second Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseTwo">
                                        <span>2.</span> Lorem Ipsum is simply dummy text of the printing ?
            </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing. </p>
                                    </div>
                                </div>
                            </div>
                            {/* Third Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseThree">
                                        <span>3.</span> Sed ut perspiciatis unde omnis iste natus error sit ?
            </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Fourth Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFour">
                                        <span>4.</span> At vero eos et accusamus et iusto odio dignissimos ?
            </h4>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Fifth Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFive">
                                        <span>5.</span> On the other hand, we denounce with ?
            </h4>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Sixth Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseSix">
                                        <span>6.</span>Lorem ipsum dolor sit amet, consectetur ?
            </h4>
                                </div>
                                <div id="collapseSix" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing. </p>
                                    </div>
                                </div>
                            </div>
                            {/* Seventh Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseSeven">
                                        <span>7.</span> There are many variations of passages ?
            </h4>
                                </div>
                                <div id="collapseSeven" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Eight Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseEight">
                                        <span>8.</span> It is a long established fact that a reader ?
            </h4>
                                </div>
                                <div id="collapseEight" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Ninth Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseNine">
                                        <span>9.</span>The standard chunk of Lorem Ipsum ?
            </h4>
                                </div>
                                <div id="collapseNine" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Tenth Panel */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title" data-toggle="collapse" data-target="#collapseTen">
                                        <span>10.</span> Nor again is there anyone who loves or pursues ?
            </h4>
                                </div>
                                <div id="collapseTen" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
