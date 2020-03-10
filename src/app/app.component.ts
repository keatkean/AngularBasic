import {Component, OnInit} from '@angular/core';
import {AuthService} from './adalservice/adal.service';
import { Customer } from './customer/customer';

class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}
class Item {
  name: string;
  val: number;
}

class StyleClass {
  'color' = 'blue';
  'font-size.px' = 20;
  'font-weight' = 'bold';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  styleClass: StyleClass = new StyleClass();

  title = 'Angular Basic';
  color = 'red';
  size = 10;
  count = 0;
  num = 0;
  username = '';
  name = '';
  showMe: boolean;

  loginSuccess: boolean;
  public loading = false;
  isAuthenticated: boolean;
  items: Item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];
  selectedValue = 'One';

  movieTitle = 'Top 10 Movies';
  movies: Movie[] = [

    {title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016'},
    {title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016'},
    {title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016'},
    {title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016'},
    {title: 'Warcraft', director: 'Duncan Jones', cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster', releaseDate: 'June 10, 2016'},
    {title: 'Avengers: Age of Ultron', director: 'Joss Whedon', cast: 'Robert Downey Jr., Chris Evans, Mark Ruffalo', releaseDate: 'May 1, 2015'},
    {title: 'Star Wars: The Force Awakens', director: 'Colin Trevorrow', cast: 'Chris Pratt, Bryce Dallas Howard, Jake M. Johnson', releaseDate: 'Dec 12, 2015'},
    {title: 'The Hunger Games: Mockingjay - Part 2', director: 'Francis Lawrence', cast: 'Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth', releaseDate: 'November 20, 2015'},
    {title: 'Jurassic World', director: 'Colin Trevorrow', cast: ' Chris Pratt, Bryce Dallas Howard, Jake M. Johnson', releaseDate: 'June 12, 2015'},
    {title: 'Furious 7', director: 'James Wan', cast: ' Vin Diesel, Paul Walker, Dwayne Johnson', releaseDate: 'April 3, 2015'},
    {title: 'Terminator: Genisys', director: 'Alan Taylor', cast: 'Arnold Schwarzenegger, Emilia Clarke, Jai Courtney', releaseDate: 'July 1, 2015'},
    {title: 'Ant-Man', director: 'Peyton Reed', cast: 'Paul Rudd, Evangeline Lilly, Michael Douglas, Corey Stoll', releaseDate: 'July 17, 2015'},
    {title: 'Mission: Impossible 5 Rogue Nation', director: 'Christopher McQuarrie', cast: 'Tom Cruise, Jeremy Renner, Simon Pegg, Alec Baldwin', releaseDate: 'July 31, 2015'},
    {title: 'Tomorrowland', director: 'Brad Bird', cast: 'Britt Robertson, George Clooney, Judy Greer, Hugh Laurie', releaseDate: 'May 22, 2015'},
    {title: 'Mad Max: Fury Road', director: 'George Miller', cast: 'om Hardy, Charlize Theron, Zoë Kravitz', releaseDate: 'May 15, 2015'},
  ];
  Counter = 5;
  displayChild = true;
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.authService.handleCallback();
      this.authService.startAuthentication();
    }
    console.log('IsLogin:' + this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      this.username = this.authService.getName();
      console.log('username is ' + this.username);
      this.loginSuccess = true;
      this.loading = true;
      this.isAuthenticated = true;
    } else {
      this.loading = false;
    }
  }

  LogOut() {
    this.authService.signout();
    this.loginSuccess = false;
  }

  getTitle(): string {
    return this.title;
  }

  buttonClicked(): void {
    this.count = this.count + 1;
    console.log('Button Clicked');
  }

  increment() {
    this.Counter++;
  }

  decrement() {
    this.Counter--;
  }

  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  customer: Customer = new Customer();
  custName= '';
  code= 0;
  message = '';
  updateCustomer() {
    // this.customer= new Customer();  
    this.customer.name = this.custName;
    this.customer.customerNo = this.code;
  }
}
