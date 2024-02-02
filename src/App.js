import './App.css';
import { BsSearch, BsEye,BsCartFill, BsShopWindow,BsClock,BsTwitter} from "react-icons/bs";
import { FaShoppingCart, FaRegCreditCard, FaWallet, FaPaperPlane, FaFacebookSquare,FaLinkedinIn,FaDribbble} from "react-icons/fa";

function App() {
  return (
    // Header
    <div class='website-layout'>
        <div class='header-back'>
          <div class='container'>
            <div class='top-header'>
                <div class='logo'>SHOP.</div>
                  <ul>
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                  </ul>
                <div class='search-header'>
                  <p>Search..</p>
                  <a class='search'><BsSearch></BsSearch></a>
                  <a class='shop'><FaShoppingCart></FaShoppingCart><span>o</span></a>
                </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div class='slider'>
            <div class='spacer'>
                  <div class='slider-data'>
                    <p class='price'>$800</p>
                    <p class='slider-head'>ALATO CABINET</p>
                    <p class='slider-pra'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    <button>Purchase Now</button>
                  </div>
            </div>
        </div>
        {/* Fectures Contain */}
        <div class='credit'>
          <div class='container'>
            <div class='delivery'>
                  <div class='fecture'>
                    <a class='icon'><FaRegCreditCard></FaRegCreditCard></a>
                    <p class='fec-head'>CREDIT CARD</p>
                    <p class='fec-pra'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                    <button>Learn More</button>
                  </div>
                  <div class='fecture'>
                    <a class='icon'><FaWallet></FaWallet></a>
                    <p class='fec-head'>SAVE MONEY</p>
                    <p class='fec-pra'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                    <button>Learn More</button>
                  </div>
                  <div class='fecture'>
                    <a class='icon'><FaPaperPlane></FaPaperPlane></a>
                    <p class='fec-head'>FREE DELIVERY</p>
                    <p class='fec-pra'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                    <button>Learn More</button>
                  </div>
            </div>
          </div>
        </div>
        {/* Coll Stuff */}
        <div class='container'>
            <div class='cool-stuff'>
                <div class='cool-head'>
                    <p class='cool1'>COOL STUFF</p>
                    <p class='cool2'>PRODUCTS.</p>
                    <p class='cool-pra'>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                </div>
                <div class='cool-image'>
                  <div class='cool-contain'>
                    <img src={require(`./image/asset 8.jpeg`)}></img>
                    <p class='cool-p'>HAUTEVILLE CONCRETE ROCKING CHAIR</p>
                    <p class='cool-price'>$350</p>
                  </div>
                  <div class='cool-contain'>
                    <img src={require(`./image/asset 9.jpeg`)}></img>
                    <p class='cool-p'>PAVILION SPEAKER</p>
                    <p class='cool-price'>$600</p>
                  </div>
                  <div class='cool-contain'>
                    <img src={require(`./image/asset 10.jpeg`)}></img>
                    <p class='cool-p'>LIGOMANCER</p>
                    <p class='cool-price'>$780</p>
                  </div>
                </div>
                <div class='cool-image2'>
                  <div class='cool-contain'>
                    <img src={require(`./image/asset 11.jpeg`)}></img>
                    <p class='cool-p'>ALATO CABINET</p>
                    <p class='cool-price'>$800</p>
                  </div>
                  <div class='cool-contain'>
                    <img src={require(`./image/asset 12.jpeg`)}></img>
                    <p class='cool-p'>EARING WIRELESS</p>
                    <p class='cool-price'>$100</p>
                  </div>
                  <div class='cool-contain'>
                    <img src={require(`./image/asset 13.jpeg`)}></img>
                    <p class='cool-p'>SCULPTURAL COFFEE TABLE</p>
                    <p class='cool-price'>$960</p>
                  </div>
                </div>
            </div>
        </div>
        {/* Testimonial Slider */}
        <div class='test-back'>
          <div class='container'>
            <div class='testimonial'>
                  <div class='test-head'>
                      <p class='test1'>TESTIMONY</p>
                      <p class='test2'>HAPPY CLIENTS</p>
                  </div>
            </div>
            <div class='test-contain'>
                <img src={require(`./image/asset 2.jpeg`)}></img>
                <p class='tital'>JEAN DOE, VIA <a>TWITTER</a></p>
                <p class='test-pra'>“Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <p class='dots'><span class='active'> </span> <span> </span> <span> </span></p>
            </div>
          </div>
        </div>
        {/* Counter */}
        <div class='counter'>
            <div class='container'>
                  <div class='counter-contain'>
                    <div class='coun-portion'>
                      <i><BsEye></BsEye></i>
                      <h1>22070</h1>
                      <p>CREATIVITY FUEL</p>
                    </div>
                    <div class='coun-portion'>
                      <i><BsCartFill></BsCartFill></i>
                      <h1>450</h1>
                      <p>HAPPY CLIENTS</p>
                    </div>
                    <div class='coun-portion'>
                      <i><BsShopWindow></BsShopWindow></i>
                      <h1>700</h1>
                      <p>ALL PRODUCTS</p>
                    </div>
                    <div class='coun-portion'>
                      <i><BsClock></BsClock></i>
                      <h1>5605</h1>
                      <p>HOURS SPENT</p>
                    </div>
                  </div>
            </div>
        </div>
        {/* Newsletter */}
        <div class='newsle-back'>
            <div class='container'>
                <div class='new-head'>
                    <div class='head'>
                          <h1>Newsletter</h1>
                          <p>Just stay tune for our latest Product. Now you can subscribe</p>
                          <div class='new-input'>
                            <input type='text' placeholder='Email'></input>
                            <button>subscribe</button>
                          </div>
                    </div>
                </div>
            </div>  
        </div>
        {/* Footer */}
        <footer>
           <div class='container'>
              <div class='footer-all'>
                <div class='logo-caption'> 
                  <div class='logo-pra'>
                    <div class='logo'>SHOP.</div>
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                  </div>
                  <ul>
                  <li>About</li>
                  <li>Help</li>
                  <li>Contact</li>
                  <li>Terms</li>
                  <li>Meetups</li>
                </ul>
                <ul>
                  <li>Shop</li>
                  <li>Privacy</li>
                  <li>Testimonials</li>
                  <li>Handbook</li>
                  <li>Held Desk</li>
                </ul>
                <ul>
                  <li>Find Designers</li>
                  <li>Find Developers</li>
                  <li>Teams</li>
                  <li>Advertise</li>
                  <li>API</li>
                </ul>
              </div> 
              <div class='copy-right'> 
                <p>© 2018 Free HTML5. All Rights Reserved.</p>
                <h6>Designed by<a> FreeHTML5.co</a> Demo Images:<a> Gessato</a> &<a> Unsplash</a></h6>
                <div class='footer-icon'>
                  <i><BsTwitter></BsTwitter></i>
                  <i><FaFacebookSquare></FaFacebookSquare></i>
                  <i><FaLinkedinIn></FaLinkedinIn></i>
                  <i><FaDribbble></FaDribbble></i>
                </div>
             </div>
            </div>
           </div>
        </footer>
    </div>
  );
}

export default App;
