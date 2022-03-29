import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const DetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetup.image}
      id={props.meetup.id}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
};

export default DetailPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:asd123@cluster0.xnekx.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  const meetupIds = meetups.map((meetup) => {
    return {
      params: {
        meetupId: meetup._id.toString(),
      },
    };
  });
  return {
    fallback: false,
    paths: meetupIds,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:asd123@cluster0.xnekx.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetup = await meetupCollection.findOne({ _id: ObjectId(meetupId) });
  console.log(meetup);
  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}
