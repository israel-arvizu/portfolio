import React from "react";
import '../assets/css/main.css'

export default function SplashPage() {
    return (
        <div className="is-preload">
            {/* <!-- Header --> */}
                <header id="header">
                    <div className="inner">
                        <a href="#" className="image avatar"><img id='profile-picture' src="/static/IsraelHeadShot.JPG" alt="" /></a>
                        <h1 style={{color: "#ece9e9c5"}}><strong>My name is Israel</strong>, a 21 year old, <br />
                         junior developer with a passion for full stack engineering. <br />
                        Connect with me on <a href="https://www.linkedin.com/in/israel-arvizu/">Linked In</a>.</h1>
                    </div>
                    <footer id="footer-top">
                        <div className="inner">
                            <ul className="icons">
                                <li><a href="https://www.linkedin.com/in/israel-arvizu/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                <li><a href="https://github.com/israel-arvizu" className="icon brands fa-github"><span className="label">Github</span></a></li>
                                <li><a href="https://angel.co/u/israel-arvizu" className="icon brands fa-angellist"><span className="label">AngelList</span></a></li>
                                <li><a href="mailto:israelarvizuofficial@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                            </ul>
                            <ul className="copyright">
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
                            <header className="major">
                                <h2 style={{marginBottom: "10px"}}>About Me</h2>
                            </header>
                            {/* <p style={{fontSize: "20px"}}>At a very young age I knew my passion was to be involved with tech and what better way to do it than to be a software engineer.
                                Entering college immediately I pursued my associates in computer science learning C++ and Java alongside my general-Ed classes.
                                All this while I worked part-time jobs on the side with companies such as Wells Fargo, Target, Macys, Hollister, etc.
                                Even though these jobs taught me a lot of experience in the real world I simply knew that working customer service wasn't for me and couldn't wait for the day to come where I would start my programming career.
                                <br/> I realized that although college is a good route to enter the tech world, it is not the only route; so in 2022 I took a break from college to broaden my knowledge in the SWE field and
                                completed a 6-month boot-camp called AppAcademy. I learned extensive knowledge on languages and frameworks where I can truly say I am a full-stack developer.
                                I love to create things and solve problems which is why my love for computer science is so heavy and will continue to expand over my lifetime.</p> */}
                            <p><span className="image right"><img src="/static/aboutUs-1.JPG" alt="Israel Arvizu About Me" /></span>At a very young age I knew my passion was to be involved with tech and what better way to do it than to be a software engineer.
                                Entering college immediately I pursued my associates in computer science learning C++ and Java alongside my general-Ed classes.
                                All this while I worked part-time jobs on the side with companies such as Wells Fargo, Target, Macys, Hollister, etc.
                                Even though these jobs taught me a lot of experience in the real world I simply knew that working customer service wasn't for me and couldn't wait for the day to come where I would start my programming career.
                                I realized that although college is a good route to enter the tech world, it is not the only route; so in 2022 I took a break from college to broaden my knowledge in the SWE field and
                                completed a 6-month boot-camp called AppAcademy. I learned extensive knowledge on languages and frameworks where I can truly say I am a full-stack developer.
                                I love to create things and solve problems which is why my love for computer science is so heavy and will continue to expand over my lifetime.</p>
                        </section>
                    {/* <!-- Two --> */}
                        <section id="two">
                            <h2>Recent Work</h2>
                            <div className="row">
                                <article className="col-6 col-12-xsmall work-item">
                                    <a href="https://insta-flick.herokuapp.com/" className="image fit thumb"><img src="/static/Instaflick-home.JPG" alt="Instaflick Home" /></a>
                                    <h3>Instaflick</h3>
                                    <p className="under-col-subtitle">Solo Project - A <a href="https://www.instagram.com/">Instagram</a> clone </p>
                                    <p>Instaflick is contructed integrating the same feautures that Instagram offers. Users are allowed to create posts, comments, likes and search for their friends all designed with the same UI and RESTful API.</p>
                                </article>
                                <article className="col-6 col-12-xsmall work-item">
                                    <a href="https://hipresort.herokuapp.com/" className="image fit thumb"><img src="/static/HipResortUpd.JPG" alt="Hip Resort Home" /></a>
                                    <h3>HipResort</h3>
                                    <p className="under-col-subtitle">Solo Project - A <a href="https://www.hipcamp.com/en-US">HipCamp</a> Clone</p>
                                    <p>HipResort is a web application for booking and hosting resorts all over the world. Altought this project uses mock data and is not actually associated with any resorts, it gives users the same experience that a real booking website would give. </p>
                                </article>
                                <article className="col-6 col-12-xsmall work-item">
                                    <a href="https://alphahood.herokuapp.com/" className="image fit thumb"><img src="/static/Alphahood.JPG" alt="AlphaHood Home" /></a>
                                    <h3>AlphaHood</h3>
                                    <p className="under-col-subtitle">4-Man Project - A <a href="https://robinhood.com/us/en/">RobinHood</a> clone </p>
                                    <p>AlphaHood is a mock stock broker website that takes inspiration from the popular website RobinHood. Similarly to RobinHood users have a wallets, watchlists, portfolio's, and to increase the experience even more AlphaHood uses a third-party API package (Yfinance) to fetch the latest stock market data </p>
                                </article>
                                <article className="col-6 col-12-xsmall work-item">
                                    <a href="https://musichunt-app.herokuapp.com/" className="image fit thumb"><img src="/static/MusicHunt.JPG" alt="Music Hunt Home" /></a>
                                    <h3>Music Hunt</h3>
                                    <p className="under-col-subtitle">3-Man Project - A <a href="https://www.producthunt.com/">Product Hunt</a> clone </p>
                                    <p>Music Hunt was developed with the idea for users to browse your favorite albums and share your music with other music lovers by favoriting albums, showing off your favorite's, and posting reviews. This is my first project developed with App Academy.</p>
                                </article>
                            </div>
                            <ul className="actions">
                                <li><a href="https://www.linkedin.com/in/israel-arvizu/" className="button">Full Portfolio</a></li>
                            </ul>
                        </section>

                        <section id="four">
                            <h2>Education</h2>

                            <section>
                                <header>
                                    <h3 style={{color: "red"}}>App Academy</h3>
                                    <p style={{fontSize: "20px", marginBottom: "10px"}}>6-month intensive program on full-stack development with a 1000 hours of curriculum</p>
                                </header>
                                <p style={{fontSize: "20px"}}>In journey to expand my knowledge of being a software developer and get myself ready to enter the workforce I joined App Academy.
                                    This bootcamp showed me what it is to be in the enviorment of a developer, working Monday-Friday 8am to 5pm,
                                    collaborating with groups for projects, using platforms like slack to communicate with staff and classNamemates,
                                    and many more things that prepped me for the workforce. This academy allowed me to refine my skills and further my knowdlege as a SWD.
                                </p>
                                <header>
                                    <h4 style={{color: "navy"}}>Orange Coast College</h4>
                                    <p style={{fontSize: "20px", marginBottom: "10px"}}>One of the nation's top transfer schools located in Costa Mesa, CA</p>
                                </header>
                                <p style={{fontSize: "20px"}}>My professional journey to be a developer started at Orange Coast College. I entered as a computer science major and began learning from the basics.
                                    During my time at OCC I learned C++ and Java and I applied these skills in App Academy which helped greatly. I took a break from college to stricly focus
                                    into being a developer and I plan on going back in the near future to complete my Associates which is nearly completed.</p>
                            </section>
                        <hr></hr>
                        <section id='five'>
                            <h2>Work Experience</h2>
                            <div className="row">
                                <div className="col-6 col-12-xsmall">
                                    <h4 style={{marginBottom: '3px'}}>Wells Fargo</h4>
                                    <p className="under-col-subtitle">Teller, Sept 2021 - Feb 2022, Santa Ana, CA</p>
                                    <ul>
                                        <li>Operated with management to improve customer service and teamwork to efficiently and diligently assist customers as we were the #1 busiest branch in the lower Orange County sector.</li>
                                        <li>Efficient use of personal computer applications and the adaptation of new required software along with an assessment of risk control for any possible malware from third-party links or emails.</li>
                                        <li>Conducted due diligence and thorough verification of all relevant documents in my everyday tasks to conclude if any possible losses are at hand from possible counterfeit documents.</li>
                                    </ul>
                                    <h4 style={{marginBottom: '3px'}}>Target</h4>
                                    <p className="under-col-subtitle">Fufillment Expert, May 2020 - Aug 2021, Santa Ana, CA</p>
                                    <ul>
                                        <li>Locating and extracting merchandise from shelves and storage areas.</li>
                                        <li>Assist and supervise as lead when the department leader is not available.</li>
                                        <li>Assist guests with any needs or requests that are possible.</li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-xsmall">
                                    <h4 style={{marginBottom: '3px'}}>Swifty Gadgets LLC</h4>
                                    <p className="under-col-subtitle">CEO/Owner, Apr 2020 - Aug 2022, Orange County, CA</p>
                                    <ul>
                                        <li>Run and manage all tasks while keeping track of all finances and investments within the company with a volume of over tens of thousands of dollars.</li>
                                        <li>Generated a 30% profit margin with over roughly 100K in revenue over the calendar year of 2021.
                                        Purchase and sell in-demand products to customers such as private clients or wholesale companies with a CA seller's permit.</li>
                                        <li>Confirm and comply with the company's financials, payroll, and organizational structure with all federal, state, and local laws and regulations.</li>
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
                        <hr></hr>
                        <section id="resume-holder">
                            <div className="box alt">
                                <div className="row gtr-50 gtr-uniform">
                                    {/* <div className="col-12"><span className="image fit"><img src="/static/resume-heading.png" alt="" /></span></div> */}
                                </div>
                                <img id='resume-picture' src="/static/Israel-Arvizu-resume.jpg" alt="resume"/>
                            </div>
                            <a href="/static/Israel-Arvizu-resume.pdf" className="button primary icon solid fa-download" download="Israel_Arvizu_Resume">Download</a>
                        </section>
                        </section>

                        <section>
                                <div className="box alt">
                                    <div className="row gtr-50 gtr-uniform">
                                        <div className="col-12"><span className="image fit"><img src="/static/TechnicalHeading.png" alt="" /></span></div>
                                        <div className="col-2"><span className="image fit"><img id="image-skill-block" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" /></span></div>
                                    </div>
                                </div>
                            </section>



                    {/* <!-- Three --> */}
                        <section id="three">
                            <h2>Get In Touch</h2>
                            <p>To contact me you can reach me at any of these contact points. I am usually available from 9am - 10pm PST. I am always open to new opportunities and events. Thank you for your time!</p>
                            <div className="row">
                                <div className="col-4 col-12-small">
                                    <ul className="labeled-icons">
                                        <li>
                                            <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                            Orange County, CA
                                        </li>
                                        <li>
                                            <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                            714-804-6052
                                        </li>
                                        <li>
                                            <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
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
                            <div className="row">
                                <div className="col-6 col-12-xsmall">
                                    <h5>Unordered</h5>
                                    <ul>
                                        <li>Dolor pulvinar etiam magna etiam.</li>
                                        <li>Sagittis adipiscing lorem eleifend.</li>
                                        <li>Felis enim feugiat dolore viverra.</li>
                                    </ul>
                                    <h5>Alternate</h5>
                                    <ul className="alt">
                                        <li>Dolor pulvinar etiam magna etiam.</li>
                                        <li>Sagittis adipiscing lorem eleifend.</li>
                                        <li>Felis enim feugiat dolore viverra.</li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-xsmall">
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
                                    <ul className="icons">
                                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                        <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                                        <li><a href="#" className="icon brands fa-tumblr"><span className="label">Tumblr</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h5>Actions</h5>
                            <ul className="actions">
                                <li><a href="#" className="button primary">Default</a></li>
                                <li><a href="#" className="button">Default</a></li>
                            </ul>
                            <ul className="actions small">
                                <li><a href="#" className="button primary small">Small</a></li>
                                <li><a href="#" className="button small">Small</a></li>
                            </ul>
                            <div className="row">
                                <div className="col-6 col-12-small">
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary">Default</a></li>
                                        <li><a href="#" className="button">Default</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-small">
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary small">Small</a></li>
                                        <li><a href="#" className="button small">Small</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-small">
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary fit">Default</a></li>
                                        <li><a href="#" className="button fit">Default</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-small">
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary small fit">Small</a></li>
                                        <li><a href="#" className="button small fit">Small</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                            <section>
                                <h4>Table</h4>
                                <h5>Default</h5>
                                <div className="table-wrapper">
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
                                <div className="table-wrapper">
                                    <table className="alt">
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
                                <ul className="actions">
                                    <li><a href="#" className="button primary">Primary</a></li>
                                    <li><a href="#" className="button">Default</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><a href="#" className="button large">Large</a></li>
                                    <li><a href="#" className="button">Default</a></li>
                                    <li><a href="#" className="button small">Small</a></li>
                                </ul>
                                <ul className="actions fit">
                                    <li><a href="#" className="button primary fit">Fit</a></li>
                                    <li><a href="#" className="button fit">Fit</a></li>
                                </ul>
                                <ul className="actions fit small">
                                    <li><a href="#" className="button primary fit small">Fit + Small</a></li>
                                    <li><a href="#" className="button fit small">Fit + Small</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><a href="#" className="button primary icon solid fa-download">Icon</a></li>
                                    <li><a href="#" className="button icon solid fa-download">Icon</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><span className="button primary disabled">Primary</span></li>
                                    <li><span className="button disabled">Default</span></li>
                                </ul>
                            </section>

                            <section>
                                <h4>Form</h4>
                                <form method="post" action="#">
                                    <div className="row gtr-uniform gtr-50">
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <select name="demo-category" id="demo-category">
                                                <option value="">- Category -</option>
                                                <option value="1">Manufacturing</option>
                                                <option value="1">Shipping</option>
                                                <option value="1">Administration</option>
                                                <option value="1">Human Resources</option>
                                            </select>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                                            <label for="demo-priority-low">Low Priority</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-normal" name="demo-priority"/>
                                            <label for="demo-priority-normal">Normal Priority</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-high" name="demo-priority"/>
                                            <label for="demo-priority-high">High Priority</label>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="checkbox" id="demo-copy" name="demo-copy"/>
                                            <label for="demo-copy">Email me a copy of this message</label>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="checkbox" id="demo-human" name="demo-human" checked/>
                                            <label for="demo-human">I am a human and not a robot</label>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><input type="submit" value="Send Message" className="primary" /></li>
                                                <li><input type="reset" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            <section>
                                <h4>Image</h4>
                                <div className="box alt">
                                    <div className="row gtr-50 gtr-uniform">
                                        <div className="col-12"><span className="image fit"><img src="images/fulls/05.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/01.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/04.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/05.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/06.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/thumbs/01.jpg" alt="" /></span></div>
                                    </div>
                                </div>
                                <h5>Left &amp; Right</h5>
                                <p><span className="image left"><img src="images/avatar.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                <p><span className="image right"><img src="images/avatar.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                            </section> */}

                </div>

            {/* <!-- Footer --> */}
                <footer id="footer">
                    <div className="inner">
                        <ul className="icons">
                            <li><a href="https://www.linkedin.com/in/israel-arvizu/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/israel-arvizu" className="icon brands fa-github"><span className="label">Github</span></a></li>
                            <li><a href="https://angel.co/u/israel-arvizu" className="icon brands fa-angellist"><span className="label">AngelList</span></a></li>
                            <li><a href="mailto:israelarvizuofficial@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy;Israel Arvizu 2022</li>
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
        </div>
    )
}
