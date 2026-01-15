import Image from 'next/image';
import Link from 'next/link';
import './projects.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import localFont from 'next/font/local';


const work_sans = localFont({
  display: 'swap',
  src: [
      {
        path: '../../public/fonts/WorkSans-VariableFont_wght.ttf',
        weight: '300',
        style: 'normal',
      }
    ]
  }
)

export default function Projects() {
    return (
        <>
            <Header 
                projects="PROJECTS"
                aboutme="ABOUT ME"
                studies="STUDIES"
                contact="CONTACT"
            />
            <main>
                <section className="bg_container"></section>
                <section className="introduction">
                    <div className="introduction-left">
                        <h1 className={work_sans.className}>My Projects</h1>
                        <p>
                            <Link  href="/#contacto">CONTACT ME</Link>
                        </p>
                    </div>
                    <div className="introduction-right">
                        <Image src="/imgs/manuel-araujo-picture.png" width={305} height={377} alt="Manuel Araujo picture"/>
                    </div>
                </section>
                 <section className="collection-inventory justified-right">
                    <article>
                        <h1>Collection Inventory Mobile App.</h1>
                        <div>
                            <Image src="/imgs/clubNintendoCollection.png" width={1337} height={696} alt='Img ClubNintendoCollection app'/>
                        </div>
                        <p>A mobile app, made using Expo and React Native, to manage the inventory of Club Nintendo Magazines collection.</p>
                        <p>Enter any of the regions available for collecting Club Nintendo magazines.</p>
                        <p>Enter one of the magazine's distribution years for the selected region.</p>
                        <p>The covers of all magazines distributed in the region and year selected by the user are displayed. In addition, relevant information for each issue is shown: issue number, month and year of distribution, and whether or not it includes a poster.</p>
                        <p>By default, all magazines are marked as "Not available" in your collection. Tap the button to change their status to "Yes, available." You can revert the status by tapping the button again. All statuses are stored in your mobile device's memory.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="/privacy_policies/ClubNintendoCollection" target="_blank">GO TO PRIVACY POLICY</a>
                        </p>
                    </article>
                </section>
                <section className="shopping-list justified-left">
                    <article>
                        <h1>Shopping List Mobile App.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/UXD-M4DJKhI?si=Z-OL3U5UFnZB5k7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>A mobile app, made using Expo and React Native, to create shopping lists.</p>
                        <p>Choose a product from the drop-down list, enter the quantity you want to purchase, and it will appear in your shopping list. You'll see an estimated cost for all products added to the list.</p>
                        <p>Tap any product in the list once to cross it out and subtract its cost from the estimated total, and tap it again to remove the cross-out and add its cost back.
                        Tap and hold any product in the list to delete it individually. You can delete all products using the "Clear List" button.</p>
                        <p>It also counts with an editable database so the user can customize the app.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="/privacy_policies/compralog" target="_blank">GO TO PRIVACY POLICY</a>
                        </p>
                    </article>
                </section>
                <section className="web-editor justified-right">
                    <article>
                        <h1>Website Editor.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/9WoFDzSWwVU?si=-eJxoWuNEWh9qVgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>This is a private web app that is related to a client's public website. They are both developed with Next JS.</p>
                        <p>The website takes the information of images, titles and texts of each article from a Firebase database.</p>
                        <p>The web editor is a clone of the website, but with the obvious difference that it allows the user to upload new content to the database so the website is automatically updated.</p>
                        <p>To access the web editor, the client first logs in with the correct email and password, and then all the options to make changes to the website are available: upload new images and write new titles and texts.</p>
                        <p>In this way; a client can edit a website, that was initially developed by me writing code, whenever they want and from any device with an internet connection; by using a simple interface and without writing code.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://github.com/manuelmad/planetageek-website-editor" target="_blank">GO TO REPO</a>
                        </p>
                    </article>
                </section>
                <section className="casing-design justified-left">
                    <article>
                        <h1>Casing Design.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/UClP-DTPBxA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p>This web app allows to design every feature of the casings to be used in oil wells, which will cover the borehole in each phase of the drilling plan.</p>
                        <p>Starting with the number of casing strings and their seating depths, including an adjustment based in critical conditions; following with the selection of diameters and connections of every pipe, going through the design of their nominal weight and steel grade, and finally representing all the results obtained in a schematic diagram.</p>
                    </article>
                </section>
                <section className="budget-calculator justified-right">
                    <article>
                        <h1>Budget Calculator for La Dolce Vita.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/pYeE2LPqQBg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p>An application made with React.</p>
                        <p>This web app is used by the owners of the cake shop “La Dolce Vita” to calculate budgets for their clients.</p>
                        <p>They can choose a product from a dropdown list, input a quantity and click on a button to calculate the cost of that single product. All the operation will be shown in a table.</p>
                        <p>They can repeat this process for each product they want to sell to the client, the table will show all the products with their individual cost and the total of the sale.</p>
                        <p>There are also some areas to add additional costs from products that clients can ask that don't exist in the catalog.</p>
                        <p>At the end, there is a template of a budget with the company logo so they can take a capture of it and send it to the client.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://manuelmad.github.io/dolcevita-budget-calculator/" target="_blank">GO TO APP</a>
                        </p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://github.com/manuelmad/dolcevita-budget-calculator" target="_blank">GO TO REPO</a>
                        </p>
                    </article>
                </section>
                <section className="formation-pressures justified-left">
                    <article>
                        <h1>Pore and Fracture Pressures Calculation.</h1>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QVX95zT1mUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p>From seismic data, we can determine the pore (by using Pennebaker correlation) and fracture (by using Ben Eaton equation) pressures of the formations in the subsurface, before starting a well drilling.</p>
                    </article>
                </section>
                <section className="well-trajectory justified-right">
                    <article>
                        <h1>Directional Wells Trajectory Design.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/JLMksGhN3VU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p>This application takes the 6 values inputted by the user and calculates the needed parameters to graph the trajectory of a directional S shaped well.</p>
                        <p>In the graph, it's shown the TVD, MD and Vertical Section most important values of the trajectory.</p>
                        <p>The app also has a “Warnings” section to show a message, describing a reason, in case the desired trajectory isn't possible to perform.</p>
                    </article>
                </section>
                <section className="admin-condo justified-left">
                    <article>
                        <h1>Receipts Generator.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/38yGQ5b1LVE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p>I've created this web app so the administrator of a group of 100 houses can now generate customized receipts for the owners of each house by importing an Excel file and clicking a few buttons.</p>
                        <p>He can then download any receipt in .pdf format, instead of creating each receipt individually (100 times) as he used to.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://yacambu.netlify.app/" target="_blank">GO TO APP</a>
                        </p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://github.com/manuelmad/receipts-generator" target="_blank">GO TO REPO</a>
                        </p>
                    </article>
                </section>
                <section className="rig-selection justified-right">
                    <article>
                        <h1>Drilling Rig Selection App.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/zZfMIUBdZpY?si=usiDzngHzaXgRfr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>This app initially takes the input data, referred to the casing and drill pipe strings, to calculate the existing loads in each drilling phase: casing strings weights in the air, drilling strings weights in the air, 80% of casings body yield and 100% of drill pipes body yield.</p>
                        <p>It then selects the highest value among them all (critical hook load) and uses it, along with other input data, to calculate the minimum required capacity for the drilling rig's derrick.</p>
                        <p>Then, it uses the weight in the air of the heaviest string to calculate the minimum required power in drilling rig's drawworks.</p>
                        <p>Finally, it calculates the Safety Factor of the wire, based on its diameter and the weight in the air of the heaviest string and shows an analysis indicating whether the result obtained is within the allowed range.</p>
                    </article>
                </section>
                <section className="groceries-app justified-left">
                    <article>
                        <h1>Groceries List Web App.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/1zZXtPAF1a0?si=3mU3ocyV8t6MRffr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p>I designed and developed this application to have a friendly and customized tool that can be used by my wife to easily let me know the products I should buy when coming back home.</p>
                        <p>This application is connected to a Firebase database.</p>
                        <p>The application always shows within the shopping list those products, or documents, where the “quantity” key has a value greater than 0. It has a drop-down list that shows all the products that exist in the database and has the option to add and remove products in real time.</p>
                        <p>Additionally, the application lets the user add new products to the database.</p>
                    </article>
                </section>
                <section className="planetageek-videogame justified-right">
                    <article>
                        <h1>Planeta Geek Videogame.</h1>
                        <div>
                            <Image src="/imgs/videogame-pg-cover.png" width={1844} height={872} alt='Img planeta geek videogame'/>
                        </div>
                        <p>I've created a short RPG videogame, with only 3 levels and a final scene.</p>
                        <p>I put in practice some new concepts like: stablishing contact points of characters and objects as well as determining their collision, defining the actions due to those collisions, simultaneous render of several elements on the canvas, use of the setInterval () and setTimeout() functions, detection of the “key press” event, animations with sprites, etc.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://planetageek-videogame.netlify.app/" target="_blank">GO TO APP</a>
                        </p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://github.com/manuelmad/videogame-topdown" target="_blank">GO TO REPO</a>
                        </p>
                    </article>
                </section>
                <section className="videogames-apirest justified-left">
                    <article>
                        <h1>Videogames App.</h1>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/eWY1OrTdAMY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p>A single-page application.</p>
                        <p>Consuming the API from RAWG (<a href="https://rawg.io/" target="_blank">rawg.io</a>) to create an inventory of the user's games.</p>
                        <p>The user can search a game by name and add it in 1 of the 3 available categories: played, playing and to play. Also can delete any game from any category.</p>
                        <p>Clicking on the image of any game, a “details” view will be available.</p>
                        <p>The app uses localstorage to preserve data.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://manuelmad.github.io/API-REST/" target="_blank">GO TO APP</a>
                        </p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://github.com/manuelmad/API-REST" target="_blank">GO TO REPO</a>
                        </p>
                    </article>
                </section>
                <section className="planetageek-webpage justified-right">
                    <article>
                        <h1>Landing Page for Planeta Geek.</h1>
                        <div>
                            <Image src="/imgs/planeta-geek-webpage.png" alt="imagen ejemplo de página web planeta geek" width={1893} height={892}/>
                        </div>
                        <p>Planeta Geek is an excellent Venezuelan tv show based on videogames, tv series, movies, japanese animation and esports.</p>
                        <p>I created this landing page as a recognition for their effort, and also give them the chance to have more resources to reach new people.</p>
                        <p>The landging page includes a “web apps” section, where I included the links to some applications I've made to help them with the activities they perform for the public, including a Planeta Geek Videogame I developed with JS.</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://planetageek.netlify.app" target="_blank">GO TO APP</a>
                        </p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg><a href="https://github.com/manuelmad/planeta-geek" target="_blank">GO TO REPO</a>
                        </p>
                    </article>
                </section>
            </main>
            <Footer/>
        </>
    );
}