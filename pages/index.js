import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A Forst Meetup",
    image: "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Forst Meetup",
    image: "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Forst Meetup",
    image: "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a third meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps(){
  //  fetch data from API
  return {
    props:{
      meetups: DUMMY_MEETUPS
    },
    revalidate:2
  };
};

export default HomePage;
