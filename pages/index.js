import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A Forst Meetup",
    image: "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a first meetup!"
  },
  {
    id: "m2",
    title: "A Forst Meetup",
    image: "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a second meetup!"
  },
  {
    id: "m3",
    title: "A Forst Meetup",
    image: "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a third meetup!"
  }
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:asd123@cluster0.xnekx.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description
        };
      })
    },
    revalidate: 2
  };
}

export default HomePage;
