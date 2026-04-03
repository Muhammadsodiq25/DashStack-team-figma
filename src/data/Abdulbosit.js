import CalendarImg from "../assets/Calendar-img.png";
import CalendarBottomLeftImg1 from "../assets/Calendar-bottom-left-img1.png";
import CalendarBottomLeftImg2 from "../assets/Calendar-bottom-left-img1.png";
import CalendarBottomLeftImg3 from "../assets/Calendar-bottom-left-img3.png";
import CalendarBottomLeftImg4 from "../assets/Calendar-bottom-left-img4.png";
import CalendarBottomRightHoverImg from "../assets/Calendar-bottom-right-hover-img.png";
import Contact1 from "../assets/Contact-img1.png";
import Contact2 from "../assets/Contact-img2.png";
import Contact3 from "../assets/Contact-img3.png";
import Contact4 from "../assets/Contact-img4.png";
import Contact5 from "../assets/Contact-img5.png";
import Contact6 from "../assets/Contact-img6.png";

const Abdulbosit = [
  {
    page: "calendar",

    title: "Calender",
    buttonText: "+ Add New Event",
    goingTo: "You are going to",

    events: [
      {
        id: 1,
        title: "Design Conference",
        time: "Today 07:19 AM",
        location: "56 Davion Mission Suite 157",
        country: "Meaghenberg",
        people: 15,
        img: CalendarBottomLeftImg1,
      },
      {
        id: 2,
        title: "Weekend Festival",
        time: "16 October 2026 at 5:00 PM",
        location: "853 Moore Flats Suite 158",
        country: "Sweden",
        people: 20,
        img: CalendarBottomLeftImg2,
      },
      {
        id: 3,
        title: "Glastonbury Festival",
        time: "20-22 October 2026 at 8:00 PM",
        location: "646 Walter Road Apt. 571",
        country: "Turks Caicos Islands",
        people: 14,
        img: CalendarBottomLeftImg3,
      },
      {
        id: 4,
        title: "Ultra Europe 2026",
        time: "25 October at 10:00 PM",
        location: "506 Satterfield Tunnel Apt. 963",
        country: "San Marino",
        people: 42,
        img: CalendarBottomLeftImg4,
      },
    ],

    hoverCard: {
      image: CalendarBottomRightHoverImg,
      title: "Design Conference",
      company: "Zillul Design Agency",
      time: "Today 07:19 AM",
      location: "56 Davion Mission Suite 157",
      peopleImgs: [
        CalendarBottomLeftImg1,
        CalendarBottomLeftImg2,
        CalendarBottomLeftImg3,
      ],
      peopleCount: 15,
    },

    calendarImage: CalendarImg,
  },

  {
    page: "todo",
    title: "To-Do List",
    button: "Add New Task",

    tasks: [
      { id: 1, text: "Meeting with CEO", done: false, starred: false },
      { id: 2, text: "Pick up kids from school", done: false, starred: true },
      { id: 3, text: "Shopping with Brother", done: false, starred: false },
      { id: 4, text: "Review with HR", done: true, starred: false },
      { id: 5, text: "Going to Dia's School", done: false, starred: false },
      { id: 6, text: "Check design files", done: false, starred: true },
      { id: 7, text: "Update File", done: false, starred: false },
    ],
  },

  {
    page: "contact",
    title: "Contact",
    button: "Add New Contact",

    users: [
      {
        id: 1,
        name: "Jason Price",
        email: "kulhman.jeremy@yahoo.com",
        img: Contact1,
      },
      {
        id: 2,
        name: "Duane Dean",
        email: "rusty.botsford@wilfredo.io",
        img: Contact2,
      },
      {
        id: 3,
        name: "Jonathan Barker",
        email: "dora.haley@quinn.biz",
        img: Contact3,
      },
      {
        id: 4,
        name: "Rosie Glover",
        email: "lockman.marques@hotmail.com",
        img: Contact4,
      },
      {
        id: 5,
        name: "Patrick Greer",
        email: "realie.richmann@trevon.net",
        img: Contact5,
      },
      {
        id: 6,
        name: "Darrell Ortega",
        email: "chaya.shields@ferry.info",
        img: Contact6,
      },
    ],
  },

  {
    page: "invoice",
    title: "Invoice",

    from: {
      name: "Virginia Walker",
      address: "9694 Krajcik Locks Suite 635",
    },

    to: {
      name: "Austin Miller",
      address: "Brookview",
    },

    invoiceDate: "12 Nov 2026",
    dueDate: "25 Dec 2026",

    items: [
      {
        id: 1,
        description: "Children Toy",
        quantity: 2,
        baseCost: 20,
        total: 80,
      },
      {
        id: 2,
        description: "Makeup",
        quantity: 2,
        baseCost: 50,
        total: 100,
      },
      {
        id: 3,
        description: "Asus Laptop",
        quantity: 5,
        baseCost: 100,
        total: 500,
      },
      {
        id: 4,
        description: "Iphone X",
        quantity: 4,
        baseCost: 1000,
        total: 4000,
      },
    ],

    total: 4680,
    sendText: "Send",
  },

  {
    page: "ui-elements",
    title: "UI Elements",
    filterText: "Filter By",
    dropdown: "Charts",
  },
];

export default Abdulbosit;
