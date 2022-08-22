import React from "react";
import '../assets/css/main.css'

export default function SplashPage() {
    return (
        <body class="is-preload">
            {/* <!-- Header --> */}
                <header id="header">
                    <div class="inner">
                        <a href="#" class="image avatar"><img src="/static/IsraelHeadShot.JPG" alt="" /></a>
                        <h1><strong>My name is Israel</strong>, a 21 year old, <br />
                         junior developer with a passion for full stack engineering. <br />
                        Connect with me in <a href="https://www.linkedin.com/in/israel-arvizu/">Linked In</a>.</h1>
                    </div>
                    <footer id="footer-top">
                        <div class="inner">
                            <ul class="icons">
                                <li><a href="https://www.linkedin.com/in/israel-arvizu/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
                                <li><a href="https://github.com/israel-arvizu" class="icon brands fa-github"><span class="label">Github</span></a></li>
                                <li><a href="https://angel.co/u/israel-arvizu" class="icon brands fa-angellist"><span class="label">AngelList</span></a></li>
                                <li><a href="mailto:israelarvizuofficial@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
                            </ul>
                            <ul class="copyright">
                                <li>&copy;Israel Arvizu 2022</li>
                            </ul>
                        </div>
                    </footer>
                </header>
            {/*
            <!-- Main --> */}
                <div id="main">
                    {/* <!-- One --> */}
                        <section id="one">
                            <header class="major">
                                <h2>About Me</h2>
                            </header>
                            <p>Since I was a young boy I knew my passion was to be involved with tech and what better way to do it than to be a software engineer, since my first computer science class in high school learning Microsoft Visual Basic, It sparked my love for coding, entering college immediately I pursued my associates in computer science learning C++ and Java alongside my general-Ed classes. All this while I worked part-time jobs on the side with companies such as Wells Fargo, Target, Macys, Hollister, etc. Even though these jobs taught me a lot of experience in the real world I simply knew that working customer service wasn't for me and couldn't wait for my day to come where I start my programming career. <br/> I realized that although college is a good route to enter the tech world, it is not the only route; so in 2022 I took a break from college to extend my knowledge as a software engineer and completed a 6-month boot-camp called AppAcademy. I learned extensive knowledge on languages and frameworks such as but not limited to Javascript, Python, React, Redux, SQL, Node, HTML, CSS, AWS where I can truly say I am ready to apply this in the workspace. I love to create things and solve problems which is why my love for computer science is so heavy.</p>
                            {/* <ul class="actions">
                                <li><a href="#" class="button">Learn More</a></li>
                            </ul> */}
                        </section>
                    {/* <!-- Two --> */}
                        <section id="two">
                            <h2>Recent Work</h2>
                            <div class="row">
                                <article class="col-6 col-12-xsmall work-item">
                                    <a href="https://insta-flick.herokuapp.com/" class="image fit thumb"><img src="/static/Instaflick-home.JPG" alt="" /></a>
                                    <h3>Instaflick</h3>
                                    <p>Instaflick is a Instagram clone utilizing Javascript, Python, SQL, React, Redux, and many other tools. Users are allowed to create posts and comments and search for their friends. </p>
                                </article>
                                <article class="col-6 col-12-xsmall work-item">
                                    <a href="https://hipresort.herokuapp.com/" class="image fit thumb"><img src="/static/HipResort.JPG" alt="" /></a>
                                    <h3>HipResort</h3>
                                    <p>HipResort is a web application for booking and hosting resorts all over the world. This project was inspired by HipCamp and has a very similar style. </p>
                                </article>
                                <article class="col-6 col-12-xsmall work-item">
                                    <a href="https://alphahood.herokuapp.com/" class="image fit thumb"><img src="/static/Alphahood.JPG" alt="" /></a>
                                    <h3>AlphaHood</h3>
                                    <p>AlphaHood is a mock stock broker website that takes inspiration from the popular website RobinHood. Similarly to RobinHood users have a wallets, watchlists, portfolio's, and to increase the experience even more AlphaHood uses a API package (Yfinance) to fetch the latest stock market data </p>
                                </article>
                                <article class="col-6 col-12-xsmall work-item">
                                    <a href="https://musichunt-app.herokuapp.com/" class="image fit thumb"><img src="/static/MusicHunt.JPG" alt="" /></a>
                                    <h3>Music Hunt</h3>
                                    <p>Music Hunt, a "Product Hunt Co." clone, is a website where you can browse your favorite albums and share your music with other music lovers by favoriting albums, showing off your favorite's, and posting reviews.</p>
                                </article>
                            </div>
                            <ul class="actions">
                                <li><a href="https://www.linkedin.com/in/israel-arvizu/" class="button">Full Portfolio</a></li>
                            </ul>
                        </section>

                        <section id="four">
                            <h2>Education</h2>

                            <section>
                                <header>
                                    <h4 style={{color: "red"}}>App Academy</h4>
                                    <p>6-month intensive program on full-stack development with a1000 hours of curriculum</p>
                                </header>
                                <p>To be filled out more about my journey...</p>
                                <header>
                                    <h4 style={{color: "navy"}}>Orange Coast College</h4>
                                    <p>One of the nation's top transfer schools located in Orange County, CA</p>
                                </header>
                                <p>To be filled out more about my journey...</p>
                            </section>
                        <hr></hr>
                        <section id='five'>
                            <h2>Work Experience</h2>
                            <div class="row">
                                <div class="col-6 col-12-xsmall">
                                    <h4 style={{marginBottom: '3px'}}>Wells Fargo</h4>
                                    <p className="under-col-subtitle">Teller, Sept 2021 - Feb 2022, Santa Ana, CA</p>
                                    <ul>
                                        <li>Provide excellent service in finances and customer service.</li>
                                        <li>Work with management to improve customer service, teamwork, and problem solving.</li>
                                        <li>Efficient use of personal computer applications and the adaptation of new required software.</li>
                                    </ul>
                                    <h4 style={{marginBottom: '3px'}}>Target</h4>
                                    <p className="under-col-subtitle">Fufillment Expert, May 2020 - Aug 2021, Santa Ana, CA</p>
                                    <ul>
                                        <li>Locating and extracting merchandise from shelves and storage areas.</li>
                                        <li>Assist and supervise as lead when the department leader is not available.</li>
                                        <li>Assist guests with any needs or requests that are possible.</li>
                                    </ul>
                                </div>
                                <div class="col-6 col-12-xsmall">
                                    <h4 style={{marginBottom: '3px'}}>Swifty Gadgets LLC</h4>
                                    <p className="under-col-subtitle">CEO/Owner, Apr 2020 - Aug 2022, Orange County, CA</p>
                                    <ul>
                                        <li>Target customers to increase sales and interactions.</li>
                                        <li>Keep track of all finances and investments within the company.</li>
                                        <li>Reach new customers with the use of social media and other merchant platforms.</li>
                                    </ul>
                                    <h4 style={{marginBottom: '3px'}}>Macys</h4>
                                    <p className="under-col-subtitle">Suit Specialist, March 2019 - Feb 2020, Orange County, CA</p>
                                    <ul>
                                        <li>Assist customers in all aspects of service within my designated department. </li>
                                        <li>Operate POS, handheld device, and any other technology devices required.</li>
                                        <li>Meet all sales & CC sign up goals assigned to us by management.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        </section>

                    {/* <!-- Three --> */}
                        <section id="three">
                            <h2>Get In Touch</h2>
                            <p>To contact me you can reach me at any of these contact points. I am usually available from 9am - 10pm PST. I am always open to new opportunities and events. Thank you for your time!</p>
                            <div class="row">
                                <div class="col-4 col-12-small">
                                    <ul class="labeled-icons">
                                        <li>
                                            <h3 class="icon solid fa-home"><span class="label">Address</span></h3>
                                            Orange County, CA
                                        </li>
                                        <li>
                                            <h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
                                            714-623-7454
                                        </li>
                                        <li>
                                            <h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
                                            <a href="mailto:israelarvizuofficial@gmail.com">israelarvizuofficial@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* <section>

                            <h4>Text</h4>
                                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                This is <u>underlined</u> and this is code: <code></code>. Finally, <a href="#">this is a link</a>.</p>
                                <hr />

                            <h4>Lists</h4>
                            <div class="row">
                                <div class="col-6 col-12-xsmall">
                                    <h5>Unordered</h5>
                                    <ul>
                                        <li>Dolor pulvinar etiam magna etiam.</li>
                                        <li>Sagittis adipiscing lorem eleifend.</li>
                                        <li>Felis enim feugiat dolore viverra.</li>
                                    </ul>
                                    <h5>Alternate</h5>
                                    <ul class="alt">
                                        <li>Dolor pulvinar etiam magna etiam.</li>
                                        <li>Sagittis adipiscing lorem eleifend.</li>
                                        <li>Felis enim feugiat dolore viverra.</li>
                                    </ul>
                                </div>
                                <div class="col-6 col-12-xsmall">
                                    <h5>Ordered</h5>
                                    <ol>
                                        <li>Dolor pulvinar etiam magna etiam.</li>
                                        <li>Etiam vel felis at lorem sed viverra.</li>
                                        <li>Felis enim feugiat dolore viverra.</li>
                                        <li>Dolor pulvinar etiam magna etiam.</li>
                                        <li>Etiam vel felis at lorem sed viverra.</li>
                                        <li>Felis enim feugiat dolore viverra.</li>
                                    </ol>
                                    <h5>Icons</h5>
                                    <ul class="icons">
                                        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                                        <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                        <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                                        <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                                        <li><a href="#" class="icon brands fa-tumblr"><span class="label">Tumblr</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h5>Actions</h5>
                            <ul class="actions">
                                <li><a href="#" class="button primary">Default</a></li>
                                <li><a href="#" class="button">Default</a></li>
                            </ul>
                            <ul class="actions small">
                                <li><a href="#" class="button primary small">Small</a></li>
                                <li><a href="#" class="button small">Small</a></li>
                            </ul>
                            <div class="row">
                                <div class="col-6 col-12-small">
                                    <ul class="actions stacked">
                                        <li><a href="#" class="button primary">Default</a></li>
                                        <li><a href="#" class="button">Default</a></li>
                                    </ul>
                                </div>
                                <div class="col-6 col-12-small">
                                    <ul class="actions stacked">
                                        <li><a href="#" class="button primary small">Small</a></li>
                                        <li><a href="#" class="button small">Small</a></li>
                                    </ul>
                                </div>
                                <div class="col-6 col-12-small">
                                    <ul class="actions stacked">
                                        <li><a href="#" class="button primary fit">Default</a></li>
                                        <li><a href="#" class="button fit">Default</a></li>
                                    </ul>
                                </div>
                                <div class="col-6 col-12-small">
                                    <ul class="actions stacked">
                                        <li><a href="#" class="button primary small fit">Small</a></li>
                                        <li><a href="#" class="button small fit">Small</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                            <section>
                                <h4>Table</h4>
                                <h5>Default</h5>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item One</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Two</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Three</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Four</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Five</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2"></td>
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <h5>Alternate</h5>
                                <div class="table-wrapper">
                                    <table class="alt">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item One</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Two</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Three</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Four</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Five</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2"></td>
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </section>

                            <section>
                                <h4>Buttons</h4>
                                <ul class="actions">
                                    <li><a href="#" class="button primary">Primary</a></li>
                                    <li><a href="#" class="button">Default</a></li>
                                </ul>
                                <ul class="actions">
                                    <li><a href="#" class="button large">Large</a></li>
                                    <li><a href="#" class="button">Default</a></li>
                                    <li><a href="#" class="button small">Small</a></li>
                                </ul>
                                <ul class="actions fit">
                                    <li><a href="#" class="button primary fit">Fit</a></li>
                                    <li><a href="#" class="button fit">Fit</a></li>
                                </ul>
                                <ul class="actions fit small">
                                    <li><a href="#" class="button primary fit small">Fit + Small</a></li>
                                    <li><a href="#" class="button fit small">Fit + Small</a></li>
                                </ul>
                                <ul class="actions">
                                    <li><a href="#" class="button primary icon solid fa-download">Icon</a></li>
                                    <li><a href="#" class="button icon solid fa-download">Icon</a></li>
                                </ul>
                                <ul class="actions">
                                    <li><span class="button primary disabled">Primary</span></li>
                                    <li><span class="button disabled">Default</span></li>
                                </ul>
                            </section>

                            <section>
                                <h4>Form</h4>
                                <form method="post" action="#">
                                    <div class="row gtr-uniform gtr-50">
                                        <div class="col-6 col-12-xsmall">
                                            <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                                        </div>
                                        <div class="col-6 col-12-xsmall">
                                            <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                                        </div>
                                        <div class="col-12">
                                            <select name="demo-category" id="demo-category">
                                                <option value="">- Category -</option>
                                                <option value="1">Manufacturing</option>
                                                <option value="1">Shipping</option>
                                                <option value="1">Administration</option>
                                                <option value="1">Human Resources</option>
                                            </select>
                                        </div>
                                        <div class="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                                            <label for="demo-priority-low">Low Priority</label>
                                        </div>
                                        <div class="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-normal" name="demo-priority"/>
                                            <label for="demo-priority-normal">Normal Priority</label>
                                        </div>
                                        <div class="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-high" name="demo-priority"/>
                                            <label for="demo-priority-high">High Priority</label>
                                        </div>
                                        <div class="col-6 col-12-small">
                                            <input type="checkbox" id="demo-copy" name="demo-copy"/>
                                            <label for="demo-copy">Email me a copy of this message</label>
                                        </div>
                                        <div class="col-6 col-12-small">
                                            <input type="checkbox" id="demo-human" name="demo-human" checked/>
                                            <label for="demo-human">I am a human and not a robot</label>
                                        </div>
                                        <div class="col-12">
                                            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <ul class="actions">
                                                <li><input type="submit" value="Send Message" class="primary" /></li>
                                                <li><input type="reset" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            <section>
                                <h4>Image</h4>
                                <h5>Fit</h5>
                                <div class="box alt">
                                    <div class="row gtr-50 gtr-uniform">
                                        <div class="col-12"><span class="image fit"><img src="images/fulls/05.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/01.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/02.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/03.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/04.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/05.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/06.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/03.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/02.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/thumbs/01.jpg" alt="" /></span></div>
                                    </div>
                                </div>
                                <h5>Left &amp; Right</h5>
                                <p><span class="image left"><img src="images/avatar.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                <p><span class="image right"><img src="images/avatar.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                            </section> */}

                </div>

            {/* <!-- Footer --> */}
                <footer id="footer">
                    <div class="inner">
                        <ul class="icons">
                            <li><a href="https://www.linkedin.com/in/israel-arvizu/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/israel-arvizu" class="icon brands fa-github"><span class="label">Github</span></a></li>
                            <li><a href="https://angel.co/u/israel-arvizu" class="icon brands fa-angellist"><span class="label">AngelList</span></a></li>
                            <li><a href="mailto:israelarvizuofficial@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
                        </ul>
                        <ul class="copyright">
                            <li>&copy;Israel Arvizu 2022</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </footer>

            {/* <!-- Scripts --> */}
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/jquery.poptrox.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
                <script src="assets/js/main.js"></script>
        </body>
    )
}
